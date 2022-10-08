echo "Will Remove Node Modules from components"

nodeModulesExists = "src/components/node_modules"

if [ -d "$nodeModulesExists" ]
then 
    echo "Deleting Node Modules .... "
    Remove-Item -r "src/components/node_modules"
    echo "Node Modules Deleted"
fi

echo "Already clear"

echo "Let's build the app"

npm run android