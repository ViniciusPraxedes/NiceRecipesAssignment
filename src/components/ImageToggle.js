import React, { useState } from 'react';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { Container, Row, Col } from "react-bootstrap";

const ImageToggle = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(selectedImage === image ? null : image);
    }

    const imageStyle = {
        cursor: 'pointer',
        maxWidth: '100%',
        marginBottom: '10px' // Add margin between image and text
    };

    const centeredTextStyle = {
        textAlign: 'center'
    };

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col md={4}>
                        <h1>Spaghetti Carbonara</h1>
                        <div style={centeredTextStyle}>
                            <img
                                src={projImg1}
                                alt="Your Image"
                                style={imageStyle}
                                onClick={() => handleClick(projImg1)}
                            />

                        </div>
                    </Col>

                    <Col md={4}>
                        <h1>Chicken Stir-Fry</h1>
                        <div style={centeredTextStyle}>
                            <img
                                src={projImg2}
                                alt="Your Image"
                                style={imageStyle}
                                onClick={() => handleClick(projImg2)}
                            />

                        </div>
                    </Col>

                    <Col md={4}>
                        <h1>Caprese Salad</h1>
                        <div style={centeredTextStyle}>
                            <img
                                src={projImg3}
                                alt="Your Image"
                                style={imageStyle}
                                onClick={() => handleClick(projImg3)}
                            />

                        </div>
                    </Col>
                </Row>
            </Container>
            {selectedImage === projImg1 && (
                <div className="centered-list">
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>200g spaghetti</li>
                        <li>100g pancetta or guanciale, diced</li>
                        <li>2 large eggs</li>
                        <li>50g Pecorino Romano cheese, grated</li>
                        <li>50g Parmesan cheese, grated</li>
                        <li>Freshly ground black pepper</li>
                        <li>Salt</li>
                        <li>Fresh parsley, chopped (for garnish, optional)</li>
                    </ul>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>Cook the spaghetti in a large pot of salted boiling water until al dente. Drain and set aside, reserving a bit of the pasta water.</li>
                        <li>While the pasta is cooking, fry the diced pancetta or guanciale in a pan until crispy. Remove from heat and set aside.</li>
                        <li>In a bowl, whisk together the eggs, grated Pecorino Romano, and Parmesan cheeses. Season with freshly ground black pepper.</li>
                        <li>Quickly toss the cooked spaghetti with the pancetta or guanciale, then add the egg and cheese mixture. Use some of the reserved pasta water to create a creamy sauce. Be sure to toss the pasta continuously to prevent the eggs from scrambling.</li>
                        <li>Serve immediately, garnished with freshly chopped parsley if desired.</li>
                    </ol>
                </div>
            )}
            {selectedImage === projImg2 && (
                <div className="centered-list">
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>400g boneless, skinless chicken breasts, cut into strips</li>
                        <li>2 tablespoons soy sauce</li>
                        <li>1 tablespoon oyster sauce</li>
                        <li>1 tablespoon sesame oil</li>
                        <li>2 tablespoons vegetable oil</li>
                        <li>1 onion, thinly sliced</li>
                        <li>2 bell peppers (any color), thinly sliced</li>
                        <li>1 cup broccoli florets</li>
                        <li>2 cloves garlic, minced</li>
                        <li>1-inch piece of ginger, grated</li>
                        <li>Cooked rice or noodles for serving</li>
                    </ul>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>In a bowl, marinate the chicken strips with soy sauce, oyster sauce, and sesame oil. Set aside for at least 15 minutes.</li>
                        <li>Heat vegetable oil in a large skillet or wok over medium-high heat. Add the marinated chicken and stir-fry until cooked through. Remove from the pan and set aside.</li>
                        <li>In the same pan, add a bit more oil if needed. Add the sliced onion, bell peppers, and broccoli florets. Stir-fry until they are tender-crisp.</li>
                        <li>Add the minced garlic and grated ginger to the vegetables and stir-fry for another minute.</li>
                        <li>Return the cooked chicken to the pan and toss everything together until well combined and heated through.</li>
                        <li>Serve the stir-fry over cooked rice or noodles.</li>
                    </ol>
                </div>
            )}
            {selectedImage === projImg3 && (
                <div className="centered-list">
                    <h2>Ingredients:</h2>
                    <ul>
                        <li>4 large tomatoes, sliced</li>
                        <li>200g fresh mozzarella cheese, sliced</li>
                        <li>Fresh basil leaves</li>
                        <li>Extra virgin olive oil</li>
                        <li>Balsamic vinegar (optional)</li>
                        <li>Salt and freshly ground black pepper</li>
                    </ul>
                    <h2>Instructions:</h2>
                    <ol>
                        <li>Arrange the tomato and mozzarella slices on a serving platter, alternating them and slightly overlapping.</li>
                        <li>Tuck fresh basil leaves between the tomato and mozzarella slices.</li>
                        <li>Drizzle extra virgin olive oil over the salad. If desired, add a few drops of balsamic vinegar for extra flavor.</li>
                        <li>Season with a pinch of salt and freshly ground black pepper to taste.</li>
                        <li>Serve immediately for a refreshing and simple salad.</li>
                    </ol>
                </div>
            )}

        </section>
    );
}

export default ImageToggle;
