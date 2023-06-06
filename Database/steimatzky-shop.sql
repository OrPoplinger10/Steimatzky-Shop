-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2023 at 11:16 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `steimatzky-shop`
--
CREATE DATABASE IF NOT EXISTS `steimatzky-shop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `steimatzky-shop`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `bookId` int(11) NOT NULL,
  `genreId` int(11) NOT NULL,
  `bookName` varchar(30) NOT NULL,
  `bookSummary` varchar(40) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`bookId`, `genreId`, `bookName`, `bookSummary`, `price`, `stock`) VALUES
(1, 1, 'The Three Musketeers ', 'The Adventures of the Three Musketeers', '85.00', 30),
(2, 2, 'Dear Zoo', 'Young readers love find new animals', '110.00', 40),
(3, 3, 'The Neighbor Favor', 'story about an affair with the neighbor', '65.00', 70),
(4, 4, 'Slough House', 'Slough House - the crumbling office buil', '90.00', 20),
(5, 5, 'Murder by Mistake', 'Libby Sarjeant returns ', '140.00', 50),
(6, 1, 'Tarzan', 'The original story of Tarzan', '80.00', 40),
(7, 4, 'Dark Angel', 'Letty Davenport is back in new story', '100.00', 30),
(8, 3, 'Child of Summer', 'Eveline Parish was engaged in battle, an', '95.50', 10),
(12, 1, 'The Count of Monte', 'Part adventure story and part revenge th', '50.50', 25);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `genreId` int(11) NOT NULL,
  `genreType` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`genreId`, `genreType`) VALUES
(1, 'adventures'),
(2, 'children'),
(3, 'romance'),
(4, 'thriller'),
(5, 'crime');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`bookId`),
  ADD KEY `genreId` (`genreId`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`genreId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `bookId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `genreId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`genreId`) REFERENCES `genre` (`genreId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
