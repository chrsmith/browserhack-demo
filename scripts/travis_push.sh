echo "Travis push job"

set -e -x

# Download dependencies and build
npm install
npm run build
npm run lint

# Update the stack
case ${TRAVIS_BRANCH} in
    master)
        pulumi stack select chrsmith/browserhack-demo
        pulumi update
        ;;
    *)
        echo "Push to non-master branch. No stacks to update."
        ;;
esac
