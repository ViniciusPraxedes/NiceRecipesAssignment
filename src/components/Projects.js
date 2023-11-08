import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const recipes = [
        {
            title: "Spaghetti Carbonara",
            ingredients: [
                "200g spaghetti",
                "100g pancetta or guanciale, diced",
            ],
            instructions: [
                "Cook the spaghetti in a large pot of salted boiling water until al dente. Drain and set aside, reserving a bit of the pasta water.",
            ],
            imgSrc: projImg1,
        },
        {
            title: "Chicken Stir-Fry",
            ingredients: [
                "400g boneless, skinless chicken breasts, cut into strips",
                "2 tablespoons soy sauce",
            ],
            instructions: [
                "In a bowl, marinate the chicken strips with soy sauce, oyster sauce, and sesame oil. Set aside for at least 15 minutes.",
            ],
            imgSrc: projImg2,
        },
        {
            title: "Caprese Salad",
            ingredients: [
                "4 large tomatoes, sliced",
                "200g fresh mozzarella cheese, sliced",
            ],
            instructions: [
                "Arrange the tomato and mozzarella slices on a serving platter, alternating them and slightly overlapping.",
            ],
            imgSrc: projImg3,
        },
    ];

    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(selectedRecipe === recipe ? null : recipe);
    }

    const handleImageClick = (recipe) => {
        setSelectedImage(selectedImage === recipe ? null : recipe);
    }

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    {recipes.map((recipe, index) => (
                        <Col md={4} key={index}>
                            <div className="recipe-card">
                                <h2>{recipe.title}</h2>
                                <div onClick={() => handleRecipeClick(recipe)}>
                                    {selectedRecipe === recipe && (
                                        <div>
                                            <h3>Ingredients:</h3>
                                            <ul>
                                                {recipe.ingredients.map((ingredient, i) => (
                                                    <li key={i}>{ingredient}</li>
                                                ))}
                                            </ul>
                                            <h3>Instructions:</h3>
                                            <ol>
                                                {recipe.instructions.map((instruction, i) => (
                                                    <li key={i}>{instruction}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    )}
                                    {selectedRecipe !== recipe && (
                                        selectedImage === recipe ? (
                                            <div onClick={() => handleImageClick(recipe)}>
                                                <h2>Your Text</h2>
                                                <p>Additional text or content can go here.</p>
                                            </div>
                                        ) : (
                                            <img src={recipe.imgSrc} alt={recipe.title} onClick={() => handleImageClick(recipe)} />
                                        )
                                    )}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Image" />
        </section>
    )
}
