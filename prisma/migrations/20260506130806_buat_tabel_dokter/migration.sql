-- CreateTable
CREATE TABLE `dokter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_dokter` VARCHAR(191) NOT NULL,
    `jenis_kelamin` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATETIME(3) NOT NULL,
    `id_spesialis` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `dokter` ADD CONSTRAINT `dokter_id_spesialis_fkey` FOREIGN KEY (`id_spesialis`) REFERENCES `spesialis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
