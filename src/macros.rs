// Copyright 2013-2014 The CGMath Developers. For a full listing of the authors,
// refer to the Cargo.toml file at the top-level directory of this distribution.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Utility macros for code generation

#![macro_use]

/// Generates a binary operator implementation for the permutations of by-ref and by-val
macro_rules! impl_operator {
    // When it is an unary operator
    (<$S:ident: $Constraint:ident> $Op:ident for $Lhs:ty {
        fn $op:ident($x:ident) -> $Output:ty { $body:expr }
    }) => {
        impl<$S: $Constraint> $Op for $Lhs {
            type Output = $Output;
            #[inline]
            fn $op(self) -> $Output {
                let $x = self; $body
            }
        }

        impl<'a, $S: $Constraint> $Op for &'a $Lhs {
            type Output = $Output;
            #[inline]
            fn $op(self) -> $Output {
                let $x = self; $body
            }
        }
    };
    // When the right operand is a scalar
    (<$S:ident: $Constraint:ident> $Op:ident<$Rhs:ident> for $Lhs:ty {
        fn $op:ident($lhs:ident, $rhs:ident) -> $Output:ty { $body:expr }
    }) => {
        impl<$S: $Constraint> $Op<$Rhs> for $Lhs {
            type Output = $Output;
            #[inline]
            fn $op(self, other: $Rhs) -> $Output {
                let ($lhs, $rhs) = (self, other); $body
            }
        }

        impl<'a, $S: $Constraint> $Op<$Rhs> for &'a $Lhs {
            type Output = $Output;
            #[inline]
            fn $op(self, other: $Rhs) -> $Output {
                let ($lhs, $rhs) = (self, other); $body
            }
        }
    };
    // When the right operand is a compound type
    (<$S:ident: $Constraint:ident> $Op:ident<$Rhs:ty> for $Lhs:ty {
        fn $op:ident($lhs:ident, $rhs:ident) -> $Output:ty { $body:expr }
    }) => {
        impl<$S: $Constraint> $Op<$Rhs> for $Lhs {
            type Output = $Output;
            #[inline]
            fn $op(self, other: $Rhs) -> $Output {
                let ($lhs, $rhs) = (self, other); $body
            }
        }

        impl<'a, $S: $Constraint> $Op<&'a $Rhs> for $Lhs {
            type Output = $Output;
            #[inline]
            fn $op(self, other: &'a $Rhs) -> $Output {
                let ($lhs, $rhs) = (self, other); $body
            }
        }

        impl<'a, $S: $Constraint> $Op<$Rhs> for &'a $Lhs {
            type Output = $Output;
            #[inline]
            fn $op(self, other: $Rhs) -> $Output {
                let ($lhs, $rhs) = (self, other); $body
            }
        }

        impl<'a, 'b, $S: $Constraint> $Op<&'a $Rhs> for &'b $Lhs {
            type Output = $Output;
            #[inline]
            fn $op(self, other: &'a $Rhs) -> $Output {
                let ($lhs, $rhs) = (self, other); $body
            }
        }
    };
}

macro_rules! impl_assignment_operator {
    (<$S:ident: $Constraint:ident> $Op:ident<$Rhs:ty> for $Lhs:ty {
        fn $op:ident(&mut $lhs:ident, $rhs:ident) $body:block
    }) => {
        #[cfg(feature = "unstable")]
        impl<$S: $Constraint + $Op<$S>> $Op<$Rhs> for $Lhs {
            #[inline]
            fn $op(&mut $lhs, $rhs: $Rhs) $body
        }
    };
}

macro_rules! fold_array {
    (&$method:ident, { $x:expr, $y:expr })                   => { $x.$method(&$y) };
    (&$method:ident, { $x:expr, $y:expr, $z:expr })          => { $x.$method(&$y).$method(&$z) };
    (&$method:ident, { $x:expr, $y:expr, $z:expr, $w:expr }) => { $x.$method(&$y).$method(&$z).$method(&$w) };
    ($method:ident, { $x:expr, $y:expr })                    => { $x.$method($y) };
    ($method:ident, { $x:expr, $y:expr, $z:expr })           => { $x.$method($y).$method($z) };
    ($method:ident, { $x:expr, $y:expr, $z:expr, $w:expr })  => { $x.$method($y).$method($z).$method($w) };
}

/// Generate array conversion implementations for a compound array type
macro_rules! impl_fixed_array_conversions {
    ($ArrayN:ident <$S:ident> { $($field:ident : $index:expr),+ }, $n:expr) => {
        impl<$S> Into<[$S; $n]> for $ArrayN<$S> {
            #[inline]
            fn into(self) -> [$S; $n] {
                match self { $ArrayN { $($field),+ } => [$($field),+] }
            }
        }

        impl<$S> AsRef<[$S; $n]> for $ArrayN<$S> {
            #[inline]
            fn as_ref(&self) -> &[$S; $n] {
                unsafe { mem::transmute(self) }
            }
        }

        impl<$S> AsMut<[$S; $n]> for $ArrayN<$S> {
            #[inline]
            fn as_mut(&mut self) -> &mut [$S; $n] {
                unsafe { mem::transmute(self) }
            }
        }

        impl<$S: Clone> From<[$S; $n]> for $ArrayN<$S> {
            #[inline]
            fn from(v: [$S; $n]) -> $ArrayN<$S> {
                // We need to use a clone here because we can't pattern match on arrays yet
                $ArrayN { $($field: v[$index].clone()),+ }
            }
        }

        impl<'a, $S> From<&'a [$S; $n]> for &'a $ArrayN<$S> {
            #[inline]
            fn from(v: &'a [$S; $n]) -> &'a $ArrayN<$S> {
                unsafe { mem::transmute(v) }
            }
        }

        impl<'a, $S> From<&'a mut [$S; $n]> for &'a mut $ArrayN<$S> {
            #[inline]
            fn from(v: &'a mut [$S; $n]) -> &'a mut $ArrayN<$S> {
                unsafe { mem::transmute(v) }
            }
        }
    }
}

/// Generate homogeneous tuple conversion implementations for a compound array type
macro_rules! impl_tuple_conversions {
    ($ArrayN:ident <$S:ident> { $($field:ident),+ }, $Tuple:ty) => {
        impl<$S> Into<$Tuple> for $ArrayN<$S> {
            #[inline]
            fn into(self) -> $Tuple {
                match self { $ArrayN { $($field),+ } => ($($field),+) }
            }
        }

        impl<$S> AsRef<$Tuple> for $ArrayN<$S> {
            #[inline]
            fn as_ref(&self) -> &$Tuple {
                unsafe { mem::transmute(self) }
            }
        }

        impl<$S> AsMut<$Tuple> for $ArrayN<$S> {
            #[inline]
            fn as_mut(&mut self) -> &mut $Tuple {
                unsafe { mem::transmute(self) }
            }
        }

        impl<$S> From<$Tuple> for $ArrayN<$S> {
            #[inline]
            fn from(v: $Tuple) -> $ArrayN<$S> {
                match v { ($($field),+) => $ArrayN { $($field: $field),+ } }
            }
        }

        impl<'a, $S> From<&'a $Tuple> for &'a $ArrayN<$S> {
            #[inline]
            fn from(v: &'a $Tuple) -> &'a $ArrayN<$S> {
                unsafe { mem::transmute(v) }
            }
        }

        impl<'a, $S> From<&'a mut $Tuple> for &'a mut $ArrayN<$S> {
            #[inline]
            fn from(v: &'a mut $Tuple) -> &'a mut $ArrayN<$S> {
                unsafe { mem::transmute(v) }
            }
        }
    }
}

/// Generates index operators for a compound type
macro_rules! impl_index_operators {
    ($VectorN:ident<$S:ident>, $n:expr, $Output:ty, $I:ty) => {
        impl<$S> Index<$I> for $VectorN<$S> {
            type Output = $Output;

            #[inline]
            fn index<'a>(&'a self, i: $I) -> &'a $Output {
                let v: &[$S; $n] = self.as_ref(); &v[i]
            }
        }

        impl<$S> IndexMut<$I> for $VectorN<$S> {
            #[inline]
            fn index_mut<'a>(&'a mut self, i: $I) -> &'a mut $Output {
                let v: &mut [$S; $n] = self.as_mut(); &mut v[i]
            }
        }
    }
}
