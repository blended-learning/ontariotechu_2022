build:
	docker build -t kenpu/csci2000u --build-arg UID=`id -u` --build-arg GID=`id -g` ./docker

start:
	docker run --rm -it \
		-p 8888:8888 \
		kenpu/csci2000u \
		jupyter lab --ip=0.0.0.0 --NotebookApp.token= --NotebookApp.password= 

