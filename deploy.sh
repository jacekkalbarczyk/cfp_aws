#!/usr/bin/env bash

# build and push frontend
pushd frontend
    yarn run build
    aws s3 cp dist s3://cfp-v3-s3-bucket --recursive
    # aws cloudfront create-invalidation --paths "/*" --distribution-id E6PZCV3N5WWJ8
popd

# build and push backend
pip install --quiet -r backend/requirements.txt --target packages
