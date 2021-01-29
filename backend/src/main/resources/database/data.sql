INSERT INTO category (id, category_name) VALUES
(1, 'Biology'),
(2, 'Chemistry'),
(3, 'Art'),
(4, 'Music'),
(5, 'Mathematics');

INSERT INTO article (id, creation_date, title, text, category_id) VALUES
(1, '2013-09-07', 'How do plants grow?', 'Space is yet another factor to consider when growing plants. Both the roots and foliage (leaves) need room to grow. Without enough room, plants can become stunted or too small. Overcrowded plants are also more likely to suffer from diseases since airflow may be limited.', 1),

(2, '2020-01-12', 'What is acid?', 'Acid, any substance that in water solution tastes sour, changes the colour of certain indicators (e.g., reddens blue litmus paper), reacts with some metals (e.g., iron) to liberate hydrogen, reacts with bases to form salts, and promotes certain chemical reactions (acid catalysis).', 2),

(3, '2010-11-19', 'What is factorial?', 'Acid, any substance that in water The factorial operation is encountered in many areas of mathematics, notably in combinatorics, algebra, and mathematical analysis. Its most basic use counts the possible distinct sequences – the permutations – of n distinct objects: there are n!', 5),

(4, '2011-12-01', 'What is trigonometry?', 'The branch of mathematics dealing with the relations of the sides and angles of triangles and with the relevant functions of any angles.', 5),

(5, '2000-01-01', 'What is diffusion?', 'Diffusion is the movement of a substance from an area of high concentration to an area of low concentration.!', 1),

(6, '1910-04-04', 'What diffusion happens in coffee?', 'But even without convection, the smell would still reach you eventually - not by convection, but by diffusion. In diffusion, coffee particles move from the coffee machine (an area of high concentration) to the rest of the coffee shop (an area of low concentration)', 1),

(7, '2022-12-12', 'What is covalent bond?', 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms. These electron pairs are known as shared pairs or bonding pairs, and the stable balance of attractive and repulsive forces between atoms, when they share electrons, is known as covalent bonding', 2);

INSERT INTO category_article (category_id, article_id) VALUES
(1, 1),
(2, 2),
(5, 3),
(5, 4),
(1, 5),
(1, 6),
(2, 7);