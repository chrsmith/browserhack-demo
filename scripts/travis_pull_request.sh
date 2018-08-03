echo "Travis push job"

set -e -x

npm install
npm run build
npm run lint

pulumi stack select browserhack-demo
PULUMI_PERSIST_PREVIEWS="1" pulumi preview
