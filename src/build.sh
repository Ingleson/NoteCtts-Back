set -o errexit
yarn typeorm migration:generate -d src/data-source.ts src/migrations/initialMigration
yarn dev