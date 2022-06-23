-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: konfet
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `contenido` varchar(255) NOT NULL,
  `usuario_id` int unsigned DEFAULT NULL,
  `producto_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (5,'2022-06-21 23:35:26','Que show que se viene!',1,12),(6,'2022-06-21 23:57:43','Que show que se viene!',1,11),(7,'2022-06-21 23:57:58','Que show que se viene!',1,10),(8,'2022-06-21 23:58:07','Que show que se viene!',1,9),(9,'2022-06-21 23:58:15','Que show que se viene!',1,8),(10,'2022-06-21 23:58:23','Que show que se viene!',1,7),(11,'2022-06-21 23:58:31','Que show que se viene!',1,6),(12,'2022-06-21 23:58:50','Que show que se viene!',1,5),(13,'2022-06-21 23:58:58','Que show que se viene!',1,4),(14,'2022-06-21 23:59:05','Que show que se viene!',1,3),(15,'2022-06-21 23:59:14','Que show que se viene!',1,2),(16,'2022-06-21 23:59:26','Que show que se viene!',1,1),(17,'2022-06-22 00:06:50','No me gusta mucho este artista!',2,12),(18,'2022-06-22 00:07:11','No me gusta mucho este artista!',2,11),(19,'2022-06-22 00:07:17','No me gusta mucho este artista!',2,10),(20,'2022-06-22 00:07:23','No me gusta mucho este artista!',2,9),(21,'2022-06-22 00:07:33','No me gusta mucho este artista!',2,8),(22,'2022-06-22 00:07:46','No me gusta mucho este artista!',2,7),(23,'2022-06-22 00:08:01','No me gusta mucho este artista!',2,6),(24,'2022-06-22 00:08:10','No me gusta mucho este artista!',2,5),(25,'2022-06-22 00:08:17','No me gusta mucho este artista!',2,4),(26,'2022-06-22 00:08:25','No me gusta mucho este artista!',2,3),(27,'2022-06-22 00:08:39','No me gusta mucho este artista!',2,2),(28,'2022-06-22 00:08:46','No me gusta mucho este artista!',2,1);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `artista` varchar(100) NOT NULL,
  `lugar` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `precio` int NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `entrada` varchar(255) NOT NULL,
  `numeroEntradas` int NOT NULL,
  `usuario_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'2022-06-06 00:00:00','2022-06-06 00:00:00','Daddy Yankee','Estadio Atanasio Girardot','2022-04-05',2000,'TOUR 2022. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-daddy.jpg',1,1),(2,'2022-06-06 00:00:00','2022-06-06 00:00:00','Bad Bunny','Estadio Luna Park','2024-05-14',3000,'TOUR 2024. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-badbunny.jpg',1,2),(3,'2022-06-06 00:00:00','2022-06-06 00:00:00','Bruno Mars','Park MGM','2022-12-17',2000,'TOUR 2022. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-bruno.jpg',1,3),(4,'2022-06-06 00:00:00','2022-06-06 00:00:00','Nicky Jam','Estadio Luna Park','2022-06-30',1000,'TOUR 2022. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-nicky.jpg',1,4),(5,'2022-06-06 00:00:00','2022-06-06 00:00:00','Maria Becerra','Palacio Vistalegre','2022-10-09',500,'TOUR 2022. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-maria.jpg',1,5),(6,'2022-06-06 00:00:00','2022-06-06 00:00:00','Duki','Estadio Luna Park','2023-03-04',2500,'TOUR 2023. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-duki.jpg',1,6),(7,'2022-06-06 00:00:00','2022-06-06 00:00:00','Emilia Mernes','Autódromo de Rafaela','2024-03-23',3000,'TOUR 2024. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-emilia.jpg',1,7),(8,'2022-06-06 00:00:00','2022-06-06 00:00:00','Tiago PZK','Lunario','2022-05-03',5000,'TOUR 2024. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-tiago.jpg',1,8),(9,'2022-06-06 00:00:00','2022-06-06 00:00:00','Lit Killah','Pinamar Park','2023-01-22',2000,'TOUR 2023. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-lit.jpg',1,9),(10,'2022-06-06 00:00:00','2022-06-06 00:00:00','Nicki Nicole','Estadio Madrid','2022-02-24',3000,'TOUR 2022. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-nicki.jpg',1,1),(11,'2022-06-06 00:00:00','2022-06-06 00:00:00','Eladio Carrión','Coliseo de Puerto Rico','2024-08-20',4000,'TOUR 2024. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-carrion.jpg',1,2),(12,'2022-06-06 00:00:00','2022-06-06 00:00:00','Marc Seguí','Burgosonora','2023-04-09',6000,'TOUR 2023. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-marc.jpg',1,3);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fotoDePerfil` varchar(255) NOT NULL,
  `dni` int NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `creado` datetime DEFAULT CURRENT_TIMESTAMP,
  `actualizado` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombreUsuario` (`nombreUsuario`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'chiarasalvu','csalvucci@udesa.edu.ar','/images/uploads/fotoDePerfil-1655851140169.jpg',43786234,'$2a$10$vOhnHKDgmR0Ogsim2i1uDeKtCdtFgpO/a6HNbciFod9zZMIUOUjrq','2022-06-21 22:38:15','2022-06-21 22:38:15'),(2,'perezlisandro','perezlisandro@gmail.com','/images/uploads/fotoDePerfil-1655851095020.jpg',44816456,'$2a$10$Mclaugiwli8Ay8sHK9hm5usKDZ/X3DlR61UhPmdJ5Pm5RX/NPEqre','2022-06-21 22:38:15','2022-06-21 22:38:15'),(3,'matiasgomez','matigomez@gmail.com','/images/uploads/fotoDePerfil-1655851095020.jpg',45678435,'$2a$10$Mclaugiwli8Ay8sHK9hm5usKDZ/X3DlR61UhPmdJ5Pm5RX/NPEqre','2022-06-21 22:38:15','2022-06-21 22:38:15'),(4,'Julio Cesar Falcioni','jcfalcioni@gmail.com','/images/uploads/fotoDePerfil-1655851095020.jpg',15587163,'$2a$10$Mclaugiwli8Ay8sHK9hm5usKDZ/X3DlR61UhPmdJ5Pm5RX/NPEqre','2022-06-21 22:38:15','2022-06-21 22:38:15'),(5,'Javier Gonzalez ','jgonzalez@gmail.com','/images/uploads/fotoDePerfil-1655851095020.jpg',15567162,'$2a$10$Mclaugiwli8Ay8sHK9hm5usKDZ/X3DlR61UhPmdJ5Pm5RX/NPEqre','2022-06-21 22:38:15','2022-06-21 22:38:15'),(6,'Nuria Lafite','nurialafite@gmail.com','/images/uploads/fotoDePerfil-1655851140169.jpg',17437162,'$2a$10$vOhnHKDgmR0Ogsim2i1uDeKtCdtFgpO/a6HNbciFod9zZMIUOUjrq','2022-06-21 22:38:15','2022-06-21 22:38:15'),(7,'robertosanchez','robertosanchez@gmail.com','/images/uploads/fotoDePerfil-1655851095020.jpg',35678921,'$2a$10$Mclaugiwli8Ay8sHK9hm5usKDZ/X3DlR61UhPmdJ5Pm5RX/NPEqre','2022-06-21 22:38:15','2022-06-21 22:38:15'),(8,'juanbenitez','juanbenitez@gmail.com','/images/uploads/fotoDePerfil-1655493157652.jpg',34567432,'$2a$10$Mclaugiwli8Ay8sHK9hm5usKDZ/X3DlR61UhPmdJ5Pm5RX/NPEqre','2022-06-21 22:38:15','2022-06-21 22:38:15'),(9,'biancaperez','biancapere@gmail.com','/images/uploads/fotoDePerfil-1655851140169.jpg',43786231,'$2a$10$vOhnHKDgmR0Ogsim2i1uDeKtCdtFgpO/a6HNbciFod9zZMIUOUjrq','2022-06-21 22:38:15','2022-06-21 22:38:15');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-22 23:59:57
