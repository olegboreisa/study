INSERT INTO category (id, category) VALUES
(1, 'Biology'),
(2, 'Chemistry'),
(3, 'Art'),
(4, 'Music'),
(5, 'Mathematics');

INSERT INTO article (id, creation_date, title, text, category_id) VALUES
(1, '2013-09-07', 'How do plants grow?', 'Space is yet another factor to consider when growing plants. Both the roots and foliage (leaves) need room to grow. Without enough room, plants can become stunted or too small. Overcrowded plants are also more likely to suffer from diseases since airflow may be limited.', 1),

(2, '2020-01-12', 'What is acid?', 'Acid, any substance that in water solution tastes sour, changes the colour of certain indicators (e.g., reddens blue litmus paper), reacts with some metals (e.g., iron) to liberate hydrogen, reacts with bases to form salts, and promotes certain chemical reactions (acid catalysis).' , 2),

(3, '2010-11-19', 'What is factorial?', 'Acid, any substance that in water The factorial operation is encountered in many areas of mathematics, notably in combinatorics, algebra, and mathematical analysis. Its most basic use counts the possible distinct sequences – the permutations – of n distinct objects: there are n!', 5),

(4, '2011-12-01', 'What is trigonometry?', 'The branch of mathematics dealing with the relations of the sides and angles of triangles and with the relevant functions of any angles.', 5),

(5, '2000-01-01', 'What is diffusion?', 'Diffusion is the movement of a substance from an area of high concentration to an area of low concentration.!', 1),

(6, '1910-04-04', 'What diffusion happens in coffee?', 'But even without convection, the smell would still reach you eventually - not by convection, but by diffusion. In diffusion, coffee particles move from the coffee machine (an area of high concentration) to the rest of the coffee shop (an area of low concentration)', 1),

(7, '1999-09-19', 'What is the topic1?', 'But even without convection, the smell would still reach you eventually - not by convection, but by diffusion. In diffusion, coffee particles move from the coffee machine (an area of high concentration) to the rest of the coffee shop (an area of low concentration)', 1),

(8, '2019-02-16', 'What is the topic2?', 'But even without convection, the smell would still reach you eventually - not by convection, but by diffusion. In diffusion, coffee particles move from the coffee machine (an area of high concentration) to the rest of the coffee shop (an area of low concentration)', 1),

(9, '1999-02-16', 'What is the topic3?', 'But even without convection, the smell would still reach you eventually - not by convection, but by diffusion. In diffusion, coffee particles move from the coffee machine (an area of high concentration) to the rest of the coffee shop (an area of low concentration)', 1);




INSERT INTO COMMENT (id, posted_date, comment_text, article_id) VALUES
(1, '1994-10-22', 'Nicely Writen!', 1),
(2, '2002-06-11', 'Hate!', 1),
(3, '2020-12-12', 'I would like to hear more information!', 1),
(4, '1614-01-01', 'I did not read and I still rated it as a disinformation 5G RULES!', 2);

INSERT INTO USER (id, password, username) VALUES
(1, '{bcrypt}$2y$12$WL2JkfM0YPHgFKAuiC/ejuoAFQFlw7pHWYCpVtgqFISzpjfYMuyo6', 'user'),
(2, '{bcrypt}$2y$12$WL2JkfM0YPHgFKAuiC/ejuoAFQFlw7pHWYCpVtgqFISzpjfYMuyo6', 'admin');

INSERT INTO ROLE (id, role_name) VALUES
(1, 'USER'),
(2, 'ADMIN');

INSERT INTO USER_ROLES (user_id, role_id) VALUES
(1, 1),
(2, 2),
(2, 1);
