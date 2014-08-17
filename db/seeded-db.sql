-- MySQL dump 10.13  Distrib 5.5.37, for Linux (x86_64)
--
-- Host: localhost    Database: terminus_sim
-- ------------------------------------------------------
-- Server version	5.5.37-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_types`
--

DROP TABLE IF EXISTS `account_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` varchar(400) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_types`
--

LOCK TABLES `account_types` WRITE;
/*!40000 ALTER TABLE `account_types` DISABLE KEYS */;
INSERT INTO `account_types` VALUES (1,'student',''),(2,'staff','');
/*!40000 ALTER TABLE `account_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject_code` varchar(20) NOT NULL,
  `description` varchar(400) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subject_code` (`subject_code`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'SUB_001','This is some crappy sample description for the subject SUB_001.'),(2,'SUB_002','This is some crappy sample description for the subject SUB_002.'),(3,'SUB_003','This is some crappy sample description for the subject SUB_003.'),(4,'SUB_004','This is some crappy sample description for the subject SUB_004.'),(5,'SUB_005','This is some crappy sample description for the subject SUB_005.'),(6,'SUB_006','This is some crappy sample description for the subject SUB_006.'),(7,'SUB_007','This is some crappy sample description for the subject SUB_007.'),(8,'SUB_010','This is some crappy sample description for the subject SUB_010.'),(9,'SUB_011','This is some crappy sample description for the subject SUB_011.'),(10,'SUB_012','This is some crappy sample description for the subject SUB_012.'),(11,'SUB_013','This is some crappy sample description for the subject SUB_013.'),(12,'SUB_014','This is some crappy sample description for the subject SUB_014.');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(500) NOT NULL,
  `id_users_by` int(11) NOT NULL,
  `id_posts` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_posts` (`id_posts`),
  KEY `id_users_by` (`id_users_by`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`id_posts`) REFERENCES `posts` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`id_users_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `id_users_by` int(11) NOT NULL,
  `id_classes` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_users_by` (`id_users_by`),
  KEY `id_classes` (`id_classes`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`id_users_by`) REFERENCES `users` (`id`),
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`id_classes`) REFERENCES `classes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reg_no` varchar(10) NOT NULL,
  `id_account_types` int(11) NOT NULL,
  `id_classes_in` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reg_no` (`reg_no`),
  KEY `id_account_types` (`id_account_types`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_account_types`) REFERENCES `account_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'UR11CS001',1,3),(2,'UR11CS002',1,5),(3,'UR11CS003',1,3),(4,'UR11CS004',1,5),(5,'UR11CS005',1,3),(6,'UR11CS006',1,1),(7,'UR11CS007',1,7),(8,'UR11CS010',1,5),(9,'UR11CS011',1,3),(10,'UR11CS012',1,2),(11,'UR11CS013',1,3),(12,'UR11CS014',1,9),(13,'UR11CS015',1,4),(14,'UR11CS016',1,1),(15,'UR11CS017',1,3),(16,'UR11CS020',1,6),(17,'UR11CS021',2,7),(18,'UR11CS022',1,1),(19,'UR11CS023',1,4),(20,'UR11CS024',1,5),(21,'UR11CS025',1,3),(22,'UR11CS026',1,6),(23,'UR11CS027',1,3),(24,'UR11CS030',1,5),(25,'UR11CS031',1,4),(26,'UR11CS032',1,1),(27,'UR11CS033',1,7),(28,'UR11CS034',1,6),(29,'UR11CS035',1,3),(30,'UR11CS036',1,1),(31,'UR11CS037',1,4),(32,'UR11CS040',2,9),(33,'UR11CS041',1,3),(34,'UR11CS042',1,2),(35,'UR11CS043',1,3),(36,'UR11CS044',1,5),(37,'UR11CS045',1,8),(38,'UR11CS046',1,1),(39,'UR11CS047',1,3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-08-17  1:54:50
