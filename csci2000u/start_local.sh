#!/bin/bash

source ../dev_python_env/bin/activate

jupyter-lab \
    --NotebookApp.password= \
    --NotebookApp.token= \
    --NotebookApp.disable_check_xsrf=True \
    --NotebookApp.allow_origin='*' \
    --NotebookApp.notebook_dir=$PWD/notebooks

