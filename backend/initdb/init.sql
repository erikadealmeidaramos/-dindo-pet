USE `dindo-pet`;

SET NAMES utf8;

-- -----------------------------------------------------

-- Table `Breed`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `Breed` (
        `idBreed` INT NOT NULL AUTO_INCREMENT,
        `descriptionBreed` VARCHAR(255) NOT NULL,
        `Species_idSpecies` INT NOT NULL,
        PRIMARY KEY (`idBreed`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO
    Breed (
        descriptionBreed,
        Species_idSpecies
    )
VALUES ("Vira-lata", 1), ("Vira-lata", 2), ("Abyssinian", 1), ("American Shorthair", 1), ("Angorá", 1), ("Azul Russo", 1), ("Bengal", 1), ("Birmanês", 1), ("British Shorthair", 1), ("Burmese", 1), ("Cornish Rex", 1), ("Devon Rex", 1), ("Exótico", 1), ("Himalaia", 1), ("Munchkin", 1), ("Norwegian Forest", 1), ("Persa", 1), ("Ragdoll", 1), ("Sagrado da Birmânia", 1), ("Siamês", 1), ("Siberiano", 1), ("Sphynx", 1), ("Afegão", 2), ("Akita", 2), (
        "American Staffordshire Terrier",
        2
    ), ("Basenji", 2), ("Basset Hound", 2), ("Beagle", 2), ("Bernese Mountain Dog", 2), ("Bichon Frisé", 2), ("Bloodhound", 2), ("Buldogue", 2), ("Bulmastife", 2), ("Cane Corso", 2), ("Chihuahua", 2), ("Chow Chow", 2), ("Cocker Spaniel", 2), ("Collie", 2), ("Dachshund", 2), ("Dálmata", 2), ("Doberman", 2), ("Dogue Alemão", 2), ("Fila Brasileiro", 2), ("Fox Terrier", 2), ("Golden Retriever", 2), ("Husky Siberiano", 2), ("Labrador Retriever", 2), ("Lhasa Apso", 2), ("Lulu da Pomerânia", 2), ("Maltês", 2), ("Mastiff", 2), ("Papillon", 2), ("Pastor Alemão", 2), ("Pequinês", 2), ("Pinscher", 2), ("Poodle", 2), ("Pug", 2), ("Rottweiler", 2), ("Shar Pei", 2), ("Shih Tzu", 2), ("Spitz Alemão", 2), (
        "Staffordshire Bull Terrier",
        2
    ), ("Teckel", 2), ("Weimaraner", 2), (
        "West Highland White Terrier",
        2
    ), ("Yorkshire Terrier", 2);

-- -----------------------------------------------------

-- Table `Pet`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `Pet` (
        `idPet` INT NOT NULL AUTO_INCREMENT,
        `namePet` VARCHAR(45) NOT NULL,
        `picturePet` VARCHAR(200) NOT NULL,
        `status` TINYINT NOT NULL,
        `cash` FLOAT NOT NULL,
        `User_idUser` INT NOT NULL,
        `Breed_idBreed` INT NOT NULL,
        PRIMARY KEY (`idPet`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO
    Pet (
        namePet,
        picturePet,
        status,
        cash,
        User_idUser,
        Breed_idBreed
    )
VALUES (
        'Floco de neve',
        'pet1.jpeg',
        1,
        200,
        1,
        2
    );

-- -----------------------------------------------------

-- Table `Post`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `Post` (
        `idPost` INT NOT NULL AUTO_INCREMENT,
        `picturePost` VARCHAR(200) NULL,
        `postDescription` VARCHAR(255) NULL,
        `paymentvoucher` TINYINT NOT NULL,
        `Pet_idPet` INT NOT NULL,
        PRIMARY KEY (`idPost`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- -----------------------------------------------------

-- Table `Species`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `Species` (
        `idSpecies` INT NOT NULL AUTO_INCREMENT,
        `descriptionSpecies` VARCHAR(4) NOT NULL,
        PRIMARY KEY (`idSpecies`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO Species (descriptionSpecies) VALUES ('Gato'),('Cão');

-- -----------------------------------------------------

-- Table `User`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `User` (
        `idUser` INT NOT NULL AUTO_INCREMENT,
        `nameUser` VARCHAR(200) NOT NULL,
        `email` VARCHAR(200) NOT NULL,
        `password` VARCHAR(500) NOT NULL,
        `cpf` VARCHAR(15) NOT NULL,
        `pix` VARCHAR(35) NOT NULL,
        PRIMARY KEY (`idUser`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO
    User (
        nameUser,
        email,
        password,
        cpf,
        pix
    )
VALUES (
        'Erika',
        'erika@gmail.com',
        '123',
        '123.456.789-10',
        '(11) 99999-9999'
    );