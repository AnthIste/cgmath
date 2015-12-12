(function() {var implementors = {};
implementors['libc'] = [];implementors['cgmath'] = ["impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 2]</a>; 2]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix2.html' title='cgmath::Matrix2'>Matrix2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 2]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix2.html' title='cgmath::Matrix2'>Matrix2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 3]</a>; 3]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix3.html' title='cgmath::Matrix3'>Matrix3</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 3]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix3.html' title='cgmath::Matrix3'>Matrix3</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 4]</a>; 4]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix4.html' title='cgmath::Matrix4'>Matrix4</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 4]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix4.html' title='cgmath::Matrix4'>Matrix4</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='cgmath/trait.BaseFloat.html' title='cgmath::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 4]</a>&gt; for <a class='struct' href='cgmath/struct.Quaternion.html' title='cgmath::Quaternion'>Quaternion</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='cgmath/trait.BaseFloat.html' title='cgmath::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(S, S, S, S)</a>&gt; for <a class='struct' href='cgmath/struct.Quaternion.html' title='cgmath::Quaternion'>Quaternion</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 2]</a>&gt; for <a class='struct' href='cgmath/struct.Vector2.html' title='cgmath::Vector2'>Vector2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 3]</a>&gt; for <a class='struct' href='cgmath/struct.Vector3.html' title='cgmath::Vector3'>Vector3</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 4]</a>&gt; for <a class='struct' href='cgmath/struct.Vector4.html' title='cgmath::Vector4'>Vector4</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(S, S)</a>&gt; for <a class='struct' href='cgmath/struct.Vector2.html' title='cgmath::Vector2'>Vector2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(S, S, S)</a>&gt; for <a class='struct' href='cgmath/struct.Vector3.html' title='cgmath::Vector3'>Vector3</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(S, S, S, S)</a>&gt; for <a class='struct' href='cgmath/struct.Vector4.html' title='cgmath::Vector4'>Vector4</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 2]</a>&gt; for <a class='struct' href='cgmath/struct.Point2.html' title='cgmath::Point2'>Point2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[S; 3]</a>&gt; for <a class='struct' href='cgmath/struct.Point3.html' title='cgmath::Point3'>Point3</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(S, S)</a>&gt; for <a class='struct' href='cgmath/struct.Point2.html' title='cgmath::Point2'>Point2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(S, S, S)</a>&gt; for <a class='struct' href='cgmath/struct.Point3.html' title='cgmath::Point3'>Point3</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='cgmath/trait.BaseFloat.html' title='cgmath::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='struct' href='cgmath/struct.Matrix2.html' title='cgmath::Matrix2'>Matrix2</a>&lt;S&gt;&gt; for <a class='struct' href='cgmath/struct.Basis2.html' title='cgmath::Basis2'>Basis2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='struct' href='cgmath/struct.Matrix3.html' title='cgmath::Matrix3'>Matrix3</a>&lt;S&gt;&gt; for <a class='struct' href='cgmath/struct.Basis3.html' title='cgmath::Basis3'>Basis3</a>&lt;S&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
