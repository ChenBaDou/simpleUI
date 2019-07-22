#!/bin/bash

branch=`git symbolic-ref --short -q HEAD`

if [[ $branch =~ 'master' ]]; then
    echo '开始打包生产环境 '
        npm run pro
    echo '-----------生产环境打包结束 --pro----------'
elif [[ $branch =~ 'release' ]]; then
    echo '开始打包准生产环境 --repro'
        npm run repro
    echo '-----------准生产环境打包结束 --repro----------'
elif [[ $branch =~ 'test' ]]; then
    echo '开始打包测试环境 --test'
        npm run test
    echo '-----------测试环境打包结束 --test----------'
else
    echo '开始打包开发环境 --dev'
        npm run dev
    echo '-----------开始打包开发环境 --dev----------'
fi



##if [[ $branch =~ 'feature' ]]; then
##        echo '开始打包开发环境 --dev'
##        --dev
##elif [[ $branch =~ 'develop' ]]; then
##        echo '开始打包测试环境 --test'
##        --test
##elif [[ $branch =~ 'release' || $branch =~ 'hotfix' || $branch =~ 'master' ]]; then
##        echo '开始打包生产环境 --pro'
##        --pro
##fi