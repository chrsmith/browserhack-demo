echo "Travis pull_request job"

set -e -x

# Download dependencies and build
npm install
npm run build
npm run lint

# Preview changes that would be made if the PR were merged.
case ${TRAVIS_BRANCH} in
    master)
        pulumi stack select chrsmith/browserhack-demo
        pulumi preview
        ;;
    *)
        echo "Pull Request to be merged into unknown branch. No stacks to preview."
        ;;
esac
