#!/usr/bin/env bash

# build and push frontend
pushd frontend
    yarn run build
    # aws s3 sync dist s3://cfp-v3-s3-bucket
    aws s3 sync frontend/dist/ s3://cfp-v3-s3-bucket
    # aws cloudfront create-invalidation --paths "/*" --distribution-id E6PZCV3N5WWJ8
popd

# build and push backend
pip install --quiet -r backend/requirements.txt --target packages
