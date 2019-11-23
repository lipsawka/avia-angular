-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 23 2019 г., 11:35
-- Версия сервера: 5.6.37
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `avia`
--

-- --------------------------------------------------------

--
-- Структура таблицы `client`
--

CREATE TABLE `client` (
  `client_id` int(11) NOT NULL,
  `client_surname` varchar(20) NOT NULL,
  `client_name` varchar(20) NOT NULL,
  `client_patronymic` varchar(20) NOT NULL,
  `client_birthday` date NOT NULL,
  `client_phone` varchar(12) NOT NULL,
  `client_mail` varchar(40) NOT NULL,
  `client_login` varchar(50) NOT NULL,
  `client_password` varchar(50) NOT NULL,
  `client_passport` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `client`
--

INSERT INTO `client` (`client_id`, `client_surname`, `client_name`, `client_patronymic`, `client_birthday`, `client_phone`, `client_mail`, `client_login`, `client_password`, `client_passport`) VALUES
(1, 'Ivanov', 'Ivan', 'Alexandrovich', '1994-04-12', '+79523211456', 'test@mail.ru', 'Ivanov', '123', '23'),
(2, 'Petrov', 'Alexander', 'Alexandrovich', '1984-04-12', '+79555211456', 'Petrov@mail.ru', 'Petrov', '123', '43');

-- --------------------------------------------------------

--
-- Структура таблицы `flight`
--

CREATE TABLE `flight` (
  `flight_id` int(11) NOT NULL,
  `flight_name` char(50) NOT NULL,
  `flight_town_start` char(25) NOT NULL,
  `flight_town_finish` varchar(25) NOT NULL,
  `flight_price` int(11) NOT NULL,
  `flight_time_start` time NOT NULL,
  `flight_time_finish` time NOT NULL,
  `flight_time_travel` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `flight`
--

INSERT INTO `flight` (`flight_id`, `flight_name`, `flight_town_start`, `flight_town_finish`, `flight_price`, `flight_time_start`, `flight_time_finish`, `flight_time_travel`) VALUES
(1, 'Воронеж-Москва', 'Воронеж', 'Москва', 3500, '12:00:00', '14:00:00', '02:00:00'),
(2, 'Воронеж-Санкт-Петербург', 'Воронеж', 'Санкт-Петербург', 14000, '02:00:00', '06:00:00', '04:00:00'),
(3, 'Санкт-Петербург-Воронеж', 'Санкт-Петербург', 'Воронеж', 1500, '17:00:00', '19:00:00', '02:00:00'),
(4, 'Воронеж-Москва', 'Воронеж', 'Москва', 6000, '18:00:00', '20:00:00', '02:00:00'),
(5, 'Воронеж-Баку', 'Воронеж', 'Баку', 15000, '15:00:00', '20:00:00', '05:00:00'),
(6, 'Воронеж-Липецк', 'Воронеж', 'Липецк', 3000, '07:45:00', '08:32:00', '00:47:00');

-- --------------------------------------------------------

--
-- Структура таблицы `groups`
--

CREATE TABLE `groups` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `groups`
--

INSERT INTO `groups` (`id`, `name`, `description`) VALUES
(1, 'admin', 'Administrator'),
(2, 'members', 'General User');

-- --------------------------------------------------------

--
-- Структура таблицы `login_attempts`
--

CREATE TABLE `login_attempts` (
  `id` int(11) UNSIGNED NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `login` varchar(100) NOT NULL,
  `time` int(11) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `plane`
--

CREATE TABLE `plane` (
  `plane_id` int(11) NOT NULL,
  `plane_name` varchar(10) NOT NULL,
  `plane_place_comfort` int(11) NOT NULL,
  `plane_place_business` int(11) NOT NULL,
  `plane_place_econom` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `plane`
--

INSERT INTO `plane` (`plane_id`, `plane_name`, `plane_place_comfort`, `plane_place_business`, `plane_place_econom`) VALUES
(2, 'cy-27', 3, 6, 1),
(3, 'су-28', 30, 77, 10),
(4, 'су-27', 10, 15, 10),
(5, 'ТУ-154', 30, 30, 20),
(7, 'Ил-2', 12, 10, 7),
(8, 'су-27', 3, 6, 1),
(9, 'су-150', 4, 2, 4),
(10, 'Боинг-777', 3, 2, 1),
(11, 'су-25', 2, 2, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `reservation`
--

CREATE TABLE `reservation` (
  `reservation_id` int(11) NOT NULL,
  `trip_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `reservation_place` int(11) NOT NULL,
  `reservation_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `trip`
--

CREATE TABLE `trip` (
  `trip_id` int(11) NOT NULL,
  `plane_id` int(11) NOT NULL,
  `flight_id` int(11) NOT NULL,
  `trip_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `trip`
--

INSERT INTO `trip` (`trip_id`, `plane_id`, `flight_id`, `trip_date`) VALUES
(2, 2, 1, '2018-12-18 00:00:00'),
(3, 9, 3, '2019-11-12 23:00:00'),
(4, 2, 4, '2019-11-12 08:30:00'),
(5, 5, 5, '2019-11-13 00:00:00'),
(6, 5, 5, '2019-11-14 00:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `type_place`
--

CREATE TABLE `type_place` (
  `type_place_id` int(11) NOT NULL,
  `type_place_name` varchar(10) NOT NULL,
  `type_place_coefficient` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `type_place`
--

INSERT INTO `type_place` (`type_place_id`, `type_place_name`, `type_place_coefficient`) VALUES
(1, 'Эконом', 1.1),
(2, '1Класс', 1.7),
(3, 'Комфорт', 1.4),
(4, 'Бизнес', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(254) NOT NULL,
  `activation_selector` varchar(255) DEFAULT NULL,
  `activation_code` varchar(255) DEFAULT NULL,
  `forgotten_password_selector` varchar(255) DEFAULT NULL,
  `forgotten_password_code` varchar(255) DEFAULT NULL,
  `forgotten_password_time` int(11) UNSIGNED DEFAULT NULL,
  `remember_selector` varchar(255) DEFAULT NULL,
  `remember_code` varchar(255) DEFAULT NULL,
  `created_on` int(11) UNSIGNED NOT NULL,
  `last_login` int(11) UNSIGNED DEFAULT NULL,
  `active` tinyint(1) UNSIGNED DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `ip_address`, `username`, `password`, `email`, `activation_selector`, `activation_code`, `forgotten_password_selector`, `forgotten_password_code`, `forgotten_password_time`, `remember_selector`, `remember_code`, `created_on`, `last_login`, `active`, `first_name`, `last_name`, `company`, `phone`) VALUES
(1, '127.0.0.1', 'administrator', '$2y$08$200Z6ZZbp3RAEXoaWcMA6uJOFicwNZaqk4oDhqTUiFXFe63MG.Daa', 'admin@admin.com', NULL, '', NULL, NULL, NULL, NULL, NULL, 1268889823, 1268889823, 1, 'Admin', 'istrator', 'ADMIN', '0');

-- --------------------------------------------------------

--
-- Структура таблицы `users_groups`
--

CREATE TABLE `users_groups` (
  `id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `group_id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users_groups`
--

INSERT INTO `users_groups` (`id`, `user_id`, `group_id`) VALUES
(1, 1, 1),
(2, 1, 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`client_id`);

--
-- Индексы таблицы `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`flight_id`);

--
-- Индексы таблицы `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `login_attempts`
--
ALTER TABLE `login_attempts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `plane`
--
ALTER TABLE `plane`
  ADD PRIMARY KEY (`plane_id`);

--
-- Индексы таблицы `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`reservation_id`),
  ADD KEY `FK_Ѕронирует` (`client_id`),
  ADD KEY `FK_соедин¤етс¤` (`trip_id`);

--
-- Индексы таблицы `trip`
--
ALTER TABLE `trip`
  ADD PRIMARY KEY (`trip_id`),
  ADD KEY `FK_закреплен` (`plane_id`),
  ADD KEY `FK_состоит` (`flight_id`);

--
-- Индексы таблицы `type_place`
--
ALTER TABLE `type_place`
  ADD PRIMARY KEY (`type_place_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uc_email` (`email`),
  ADD UNIQUE KEY `uc_activation_selector` (`activation_selector`),
  ADD UNIQUE KEY `uc_forgotten_password_selector` (`forgotten_password_selector`),
  ADD UNIQUE KEY `uc_remember_selector` (`remember_selector`);

--
-- Индексы таблицы `users_groups`
--
ALTER TABLE `users_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uc_users_groups` (`user_id`,`group_id`),
  ADD KEY `fk_users_groups_users1_idx` (`user_id`),
  ADD KEY `fk_users_groups_groups1_idx` (`group_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `client`
--
ALTER TABLE `client`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT для таблицы `flight`
--
ALTER TABLE `flight`
  MODIFY `flight_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `groups`
--
ALTER TABLE `groups`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `login_attempts`
--
ALTER TABLE `login_attempts`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `plane`
--
ALTER TABLE `plane`
  MODIFY `plane_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT для таблицы `reservation`
--
ALTER TABLE `reservation`
  MODIFY `reservation_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `trip`
--
ALTER TABLE `trip`
  MODIFY `trip_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `type_place`
--
ALTER TABLE `type_place`
  MODIFY `type_place_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `users_groups`
--
ALTER TABLE `users_groups`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `FK_Ѕронирует` FOREIGN KEY (`client_id`) REFERENCES `client` (`client_id`),
  ADD CONSTRAINT `FK_соедин¤етс¤` FOREIGN KEY (`trip_id`) REFERENCES `trip` (`trip_id`);

--
-- Ограничения внешнего ключа таблицы `trip`
--
ALTER TABLE `trip`
  ADD CONSTRAINT `FK_закреплен` FOREIGN KEY (`plane_id`) REFERENCES `plane` (`plane_id`),
  ADD CONSTRAINT `FK_состоит` FOREIGN KEY (`flight_id`) REFERENCES `flight` (`flight_id`);

--
-- Ограничения внешнего ключа таблицы `users_groups`
--
ALTER TABLE `users_groups`
  ADD CONSTRAINT `fk_users_groups_groups1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_groups_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
