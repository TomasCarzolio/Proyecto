-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: konfet
-- ------------------------------------------------------
-- Server version	8.0.29

CREATE SCHEMA konfet;
USE konfet; 

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
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `contenido` varchar(255) NOT NULL,
  `usuario_id` int unsigned DEFAULT NULL,
  `producto_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (30,'2022-06-23 05:46:41','Muy buen concierto!',3,12),(31,'2022-06-23 05:46:51','Muy buen concierto!',3,11),(32,'2022-06-23 05:46:55','Muy buen concierto!',3,10),(33,'2022-06-23 05:47:12','Muy gracioso Lit, un genio',3,9),(34,'2022-06-23 05:47:23','Duko tiene que volver al trap',3,6),(35,'2022-06-23 05:47:46','Medio caras las entradas pero canta bien',3,8),(36,'2022-06-23 05:48:03','Increíble que le permitan cantar en vivo.',3,5),(37,'2022-06-23 05:48:10','Muy buen concierto!',3,2),(38,'2022-06-23 05:48:15','Muy buen concierto!',3,3),(39,'2022-06-23 05:48:27','#LegenDaddy',3,1),(40,'2022-06-23 05:48:43','Veanse su serie, 10/10.',3,4),(41,'2022-06-23 05:49:06','Arruinaste al duko',3,7),(42,'2022-06-23 05:49:27','Un estilo único',1,12),(43,'2022-06-23 05:49:50','Muy infravalorado Eladio',1,11),(44,'2022-06-23 05:50:03','Coincido con Matias',1,5),(45,'2022-06-23 05:50:12','Un horror',1,5),(46,'2022-06-23 05:50:38','Idola Nicki, canta re bien!',1,10),(47,'2022-06-23 05:51:01','Muy buenas barras se tiró',1,9),(48,'2022-06-23 05:51:48','La esta rompiendo Mauro',1,6),(49,'2022-06-23 05:54:22','Yo creo que muy buen precio',1,8),(50,'2022-06-23 05:54:35','El regreso del conejo malvado',1,2),(51,'2022-06-23 05:54:55','Canta como los dioses este hombre',1,3),(52,'2022-06-23 05:55:40','Última gira, ni loca me la pierdo',1,1),(53,'2022-06-23 05:56:13','Ver a Nicky Jam por $1000 es demasiado bueno para ser verdad',1,4),(54,'2022-06-23 05:57:24','Podría comprar solo 2 de las 3 entradas?',1,7);
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
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `artista` varchar(100) NOT NULL,
  `lugar` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `precio` int NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `entrada` varchar(255) NOT NULL,
  `numeroEntradas` int NOT NULL,
  `usuario_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_ibfk_1` (`usuario_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'2022-06-06 00:00:00','2022-06-06 00:00:00','Daddy Yankee','Estadio Atanasio Girardot','2022-04-05',2000,'TOUR 2022. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-daddy.jpg',1,1),(2,'2022-06-06 00:00:00','2022-06-06 00:00:00','Bad Bunny','Estadio Luna Park','2024-05-14',3000,'TOUR 2024. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-badbunny.jpg',5,2),(3,'2022-06-06 00:00:00','2022-06-06 00:00:00','Bruno Mars','Park MGM','2022-12-17',2000,'TOUR 2022. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-bruno.jpg',1,3),(4,'2022-06-06 00:00:00','2022-06-06 00:00:00','Nicky Jam','Estadio Luna Park','2022-06-30',1000,'TOUR 2022. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-nicky.jpg',3,4),(5,'2022-06-06 00:00:00','2022-06-06 00:00:00','Maria Becerra','Palacio Vistalegre','2022-10-09',500,'TOUR 2022. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-maria.jpg',1,5),(6,'2022-06-06 00:00:00','2022-06-06 00:00:00','Duki','Estadio Luna Park','2023-03-04',2500,'TOUR 2023. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-duki.jpg',1,6),(7,'2022-06-06 00:00:00','2022-06-06 00:00:00','Emilia Mernes','Autódromo de Rafaela','2024-03-23',3000,'TOUR 2024. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-emilia.jpg',3,7),(8,'2022-06-06 00:00:00','2022-06-06 00:00:00','Tiago PZK','Lunario','2022-05-03',5000,'TOUR 2024. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-tiago.jpg',1,8),(9,'2022-06-06 00:00:00','2022-06-06 00:00:00','Lit Killah','Pinamar Park','2023-01-22',2000,'TOUR 2023. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-lit.jpg',4,9),(10,'2022-06-06 00:00:00','2022-06-06 00:00:00','Nicki Nicole','Estadio Madrid','2022-02-23',5000,'TOUR 2022. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-nicki.jpg',1,1),(11,'2022-06-06 00:00:00','2022-06-06 00:00:00','Eladio Carrión','Coliseo de Puerto Rico','2024-08-20',4000,'TOUR 2024. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-carrion.jpg',2,2),(12,'2022-06-06 00:00:00','2022-06-06 00:00:00','Marc Seguí','Burgosonora','2024-05-10',6000,'TOUR 2023. Luego de más de dos años de espera, y por entradas agotadas en todas sus funciones, habrá otra función. No te lo podes perder, ya que viviremos un concierto que promete ser histórico: el ansiado reencuentro!!','/images/products/entrada-marc.jpg',3,3);
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
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombreUsuario` (`nombreUsuario`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'chiarasalvucci','csalvucci@udesa.edu.ar','/images/uploads/fotoPerfilMujer.jpeg',43786234,'$2a$10$DtUdJ.gVA2mQAghaOuic/Oo7TJ2KDjLFwFIfU.XTd3QUdNyAZLuO.','2022-06-21 19:30:31','2022-06-24 02:17:36'),(2,' perezlisandro','perezlisandro@gmail.com','/images/uploads/fotoPerfilHombre.jpeg',44816456,'$2a$10$DtUdJ.gVA2mQAghaOuic/Oo7TJ2KDjLFwFIfU.XTd3QUdNyAZLuO.','2022-06-21 19:30:31','2022-06-24 02:40:49'),(3,'matigomez','matigomez@gmail.com','/images/uploads/fotoPerfilHombre.jpeg',45678435,'$2a$10$DtUdJ.gVA2mQAghaOuic/Oo7TJ2KDjLFwFIfU.XTd3QUdNyAZLuO.','2022-06-21 19:30:31','2022-06-24 02:40:49'),(4,'Julio Cesar Falcioni ','jcfalcioni@gmail.com','/images/uploads/fotoPerfilHombre.jpeg',15587162,'$2a$10$DtUdJ.gVA2mQAghaOuic/Oo7TJ2KDjLFwFIfU.XTd3QUdNyAZLuO.','2022-06-21 19:30:31','2022-06-24 02:40:49'),(5,'Javier Gonzalez ','jgonzalez@gmail.com','/images/uploads/fotoPerfilHombre.jpeg',15567162,'$2a$10$DtUdJ.gVA2mQAghaOuic/Oo7TJ2KDjLFwFIfU.XTd3QUdNyAZLuO.','2022-06-21 19:30:31','2022-06-24 02:40:49'),(6,'Nuria Lafite','nurialafite@gmail.com','/images/uploads/fotoPerfilMujer.jpeg',17437162,'$2a$10$DtUdJ.gVA2mQAghaOuic/Oo7TJ2KDjLFwFIfU.XTd3QUdNyAZLuO.','2022-06-21 19:30:31','2022-06-24 02:40:49'),(7,'robertosanchez','robertosanchez@gmail.com','/images/uploads/fotoPerfilHombre.jpeg',35678921,'$2a$10$DtUdJ.gVA2mQAghaOuic/Oo7TJ2KDjLFwFIfU.XTd3QUdNyAZLuO.','2022-06-21 19:30:31','2022-06-24 02:40:49'),(8,'juanbenitez','juanbenitez@gmail.com','/images/uploads/fotoPerfilHombre.jpeg',34567432,'$2a$10$DtUdJ.gVA2mQAghaOuic/Oo7TJ2KDjLFwFIfU.XTd3QUdNyAZLuO.','2022-06-21 19:30:31','2022-06-24 02:40:49'),(9,'biancaperez','biancapere@gmail.com','/images/uploads/fotoPerfilMujer.jpeg',43786231,'$2a$10$DtUdJ.gVA2mQAghaOuic/Oo7TJ2KDjLFwFIfU.XTd3QUdNyAZLuO.','2022-06-21 19:30:31','2022-06-24 02:40:49');
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

-- Dump completed on 2022-06-23 23:48:32
