#!/bin/sh
npm run build 
rm -rf ../fullstack_part3_backend/build
cp -r build ../fullstack_part3_backend
