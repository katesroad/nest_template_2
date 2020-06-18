**version**: The build spec version(0.2 recommened)
    0.2: run all build commands in the same instance

**phases**

-install
    only for installing packages in the build env
-pre_build
    commands that run before buiding
- build
    commands taht you run during build
- post_build
    commands that run after build
- artifacts:
    where you can find the build output and how to prepare it for uploading to the s3 output bucket.
