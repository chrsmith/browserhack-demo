echo "Travis push job"

set -e -x

npm install
npm run build
npm run lint

case ${TRAVIS_BRANCH} in
    master)
        pulumi stack select browserhack-demo
        pulumi update --yes
        ;;
    *)
        echo "Push to non-master branch. Not updating Stack."
        ;;
esac
