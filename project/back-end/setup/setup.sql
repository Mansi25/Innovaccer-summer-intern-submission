/* Setting up initial SQL */
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/* Creating table to store visitors */
CREATE TABLE `visitors` (
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `hname` varchar(50) NOT NULL,
  `hemail` varchar(50) NOT NULL,
  `hphone` varchar(11) NOT NULL,
  `checkin` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `checkout` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Adding initial seed data to the table*/

INSERT INTO `visitors` (`name`, `email`, `phone`, `checkin`, `checkout`,`hname`, `hemail`, `hphone`) VALUES
('Saatvik Gupta', '17ume036@lnmiit.ac.in', '8459347935', '2019-11-12 06:07:04', '2019-11-12 06:09:54'. 'Arnab Sinha', '17ucs034@lnmiit.ac.in', '8076153733');
INSERT INTO `visitors` (`name`, `email`, `phone`, `checkin`, `checkout`,`hname`, `hemail`, `hphone`) VALUES
('Arnab Sinha', '17ucs034@lnmiit.ac.in', '8076153733', '2019-11-05 01:07:04', '2019-11-05 09:09:54', 'Saatvik Gupta', '17ume036@lnmiit.ac.in', '8459347935');
COMMIT;