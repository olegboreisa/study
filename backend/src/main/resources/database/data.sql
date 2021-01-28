INSERT INTO category (id, category_name) VALUES
(1, 'Biology'),
(2, 'Chemistry'),
(3, 'Art'),
(4, 'Music'),
(5, 'Mathematics');

INSERT INTO article (id, creation_date, title, text, category_id) VALUES
(1, '2013-09-07', 'How do plants grow?', 'Space is yet another factor to consider when growing plants. Both the roots and foliage (leaves) need room to grow. Without enough room, plants can become stunted or too small. Overcrowded plants are also more likely to suffer from diseases since airflow may be limited.', 1),

(2, '2020-01-12', 'What is acid?', 'Acid, any substance that in water solution tastes sour, changes the colour of certain indicators (e.g., reddens blue litmus paper), reacts with some metals (e.g., iron) to liberate hydrogen, reacts with bases to form salts, and promotes certain chemical reactions (acid catalysis).', 2),

(3, '2010-11-19', 'What is factorial?', 'Acid, any substance that in water The factorial operation is encountered in many areas of mathematics, notably in combinatorics, algebra, and mathematical analysis. Its most basic use counts the possible distinct sequences – the permutations – of n distinct objects: there are n!', 5);

INSERT INTO category_article (category_id, article_id) VALUES
(1, 1),
(2, 2),
(5, 3);