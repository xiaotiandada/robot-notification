import type { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring1645440093712 implements MigrationInterface {
  name = 'PostRefactoring1645440093712';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      // eslint-disable-next-line max-len
      "CREATE TABLE `post_translations` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `title` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `post_id` varchar(255) NOT NULL, `language_code` enum ('EN', 'RU') NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      // eslint-disable-next-line max-len
      'CREATE TABLE `posts` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `user_id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      // eslint-disable-next-line max-len
      'CREATE TABLE `user_settings` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `is_email_verified` tinyint NOT NULL DEFAULT 0, `is_phone_verified` tinyint NOT NULL DEFAULT 0, `user_id` varchar(255) NOT NULL, UNIQUE INDEX `REL_4ed056b9344e6f7d8d46ec4b30` (`user_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      // eslint-disable-next-line max-len
      "CREATE TABLE `users` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `first_name` varchar(255) NULL, `last_name` varchar(255) NULL, `role` enum ('USER', 'ADMIN') NOT NULL DEFAULT 'USER', `email` varchar(255) NULL, `password` varchar(255) NULL, `phone` varchar(255) NULL, `avatar` varchar(255) NULL, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      // eslint-disable-next-line max-len
      'ALTER TABLE `post_translations` ADD CONSTRAINT `FK_11f143c8b50a9ff60340edca475` FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE',
    );
    await queryRunner.query(
      // eslint-disable-next-line max-len
      'ALTER TABLE `posts` ADD CONSTRAINT `FK_c4f9a7bd77b489e711277ee5986` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE',
    );
    await queryRunner.query(
      // eslint-disable-next-line max-len
      'ALTER TABLE `user_settings` ADD CONSTRAINT `FK_4ed056b9344e6f7d8d46ec4b302` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `user_settings` DROP FOREIGN KEY `FK_4ed056b9344e6f7d8d46ec4b302`',
    );
    await queryRunner.query(
      'ALTER TABLE `posts` DROP FOREIGN KEY `FK_c4f9a7bd77b489e711277ee5986`',
    );
    await queryRunner.query(
      'ALTER TABLE `post_translations` DROP FOREIGN KEY `FK_11f143c8b50a9ff60340edca475`',
    );
    await queryRunner.query(
      'DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`',
    );
    await queryRunner.query('DROP TABLE `users`');
    await queryRunner.query(
      'DROP INDEX `REL_4ed056b9344e6f7d8d46ec4b30` ON `user_settings`',
    );
    await queryRunner.query('DROP TABLE `user_settings`');
    await queryRunner.query('DROP TABLE `posts`');
    await queryRunner.query('DROP TABLE `post_translations`');
  }
}
