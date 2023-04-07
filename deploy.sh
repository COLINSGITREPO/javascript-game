#!/bin/bash

# Replace with your actual application name
APP_NAME="javascript-game"

# Stop the application if it's already running
#!/bin/bash

# Replace with your actual application name
APP_NAME="javascript-game"

# Stop the application if it's already running
if [ -f /var/run/${APP_NAME}.pid ]; then
    sudo kill -TERM `sudo cat /var/run/${APP_NAME}.pid` || true
fi

# Remove previous build artifacts
sudo rm -rf /var/www/${APP_NAME}

# Clone the latest version of the code from Git
git clone https://github.com/COLINSGITREPO/javascript-game.git /var/www/${APP_NAME}

# Change to the repository directory
cd /var/www/${APP_NAME}

#check if there is instance running with the image name that is been deployed
#CURRENT_INSTANCE=$(docker ps -a-q --filter ancestor="$IMAGE_NAME" --format="{{.ID}}")

# if instance existce stop the instance
#if [ "$CURRENT_INSTANCE" ]
#then
#  docker rm $(docker stop $CURRENT_INSTANCE)
#fi

# pull down the instance from docker hub
#docker pull $IMAGE_NAME

# check id docker container exists with the name of the node_app if not remove the container
#CONTAINER_EXISTS=$(docker ps -a | grep node_app)
#if [ "$CONTAINER_EXISTS" ]
#then 
#  docker rm node_app
#fi

# create a container called node_app that is avilable on port 8443 from docker image
#docker create -p 8443:8443 --name node_app $IMAGE_NAME

# Install any required dependencies
sudo npm install
echo $PRIVATE_KEY > CA1.pem
echo $SERVER > server.crt
# add private key to node_app
#docker cp ./privatekey.pem node_app:/privatekey.pem
# add the server key to node_app
#docker cp ./server.crt node_app:/server.crt
# start the node_app container
#docker start node_app
# Build the application
sudo npm run build

# Start the application
sudo npm start &
echo $! | sudo tee /var/run/${APP_NAME}.pid >/dev/null 2>&1