-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 30 2022 г., 13:24
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `test_table`
--

-- --------------------------------------------------------

--
-- Структура таблицы `distance`
--

CREATE TABLE `distance` (
  `id` int(3) NOT NULL,
  `date` date NOT NULL,
  `description` text NOT NULL,
  `count` int(5) NOT NULL,
  `distance` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `distance`
--

INSERT INTO `distance` (`id`, `date`, `description`, `count`, `distance`) VALUES
(1, '2022-09-28', 'Первая запись', 15, 1277),
(2, '2022-09-28', 'Вторая запись', 154, 238),
(3, '2022-09-20', 'Третья запись', 22, 678),
(4, '2022-09-26', 'Четвертая запись', 87, 2345),
(5, '2022-09-08', 'Пятая запись', 87, 2345),
(6, '2022-09-16', 'Шестая запись', 899, 2322),
(7, '2022-09-25', 'Седьмая запись', 24, 8777),
(8, '2022-09-02', 'Восьмая запись', 234, 657),
(9, '2022-09-02', 'Девятая запись', 234, 67867),
(10, '2022-09-12', 'Десятая запись', 22, 13),
(11, '2022-09-12', 'Одиннадцатая запись', 400, 1500);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `distance`
--
ALTER TABLE `distance`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `distance`
--
ALTER TABLE `distance`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
