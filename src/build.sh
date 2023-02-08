set -o errexit
yarn typeorm migration:create src/migrations/initialMigration     
yarn typeorm migration:run -d src/data-source.ts
yarn dev