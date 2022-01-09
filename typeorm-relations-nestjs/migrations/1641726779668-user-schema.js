const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class userSchema1641726779668 {
    name = 'userSchema1641726779668'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "village" varchar NOT NULL, "contact" integer NOT NULL)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
