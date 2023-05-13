import React, { useState } from "react";
import bg from '../assets/images/banner-02.1d3252d3.jpg'
import products from "../assets/fake-data/products"
import { Col, Container, Row, Pagination, Button, InputGroup, Form, Dropdown} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import ProductCard from "../components/UI/product-card/ProductCard";

const Foods = () =>  {
  const [pageNumber, setPageNumber] = useState(0),
        [sortOrder, setSortOrder] = useState('def'),
        [searchedProdName, setSearchProd]= useState(''),
      
      filteredProducts = searchedProdName
        ? products.filter((product) =>
            product.title.toLowerCase().includes(searchedProdName.toLowerCase())
          )
        : products,
      // Enregistrer le changement en state
      handleSearchChange = (event) => {
        setSearchProd(event.target.value);
        setPageNumber(0); 
      },
      // Trier les produits apres leurs filtrages
      sortedProduct = filteredProducts.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.price - b.price;
        } else if(sortOrder === 'desc') {
          return b.price - a.price;
        }else {return false}
      }),
      itemsPerPage = 6,
      visitedPage = pageNumber * itemsPerPage,
      DisplayProd = sortedProduct.slice(
        visitedPage,
        visitedPage + itemsPerPage
      ),
      
     totalPages = Math.ceil(sortedProduct.length / itemsPerPage),

      handlePaginationClick = (event) => {
        // console.log(Number(event.target.text))
        setPageNumber(Number(event.target.text)-1);
      },
      changePage = (event) => {
        setPageNumber(Number(event.target.text)-1);
      },
      handleSortChange = (eventKey) => {
        setSortOrder(eventKey);
      };

      
  return (
    <section className="Allfoods" >
      <div className="w-100 position-relative" style={{
        background: `linear-gradient(rgba(33,34,69,.6980392156862745),rgba(33,34,69,.6980392156862745)),url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',}}>
        <Container className="py-5">
        <h1 className="py-4 fw-bold text-white fs-1">All Foods</h1>
        </Container>
      </div>
        <Container className="py-5">
          <Row className="py-4">
            <Col md="6">
              <InputGroup>
                <Form.Control
                  placeholder="I'm looking for..."
                  aria-describedby="basic-addon2"
                  className="shadow-none"
                  value={searchedProdName}
                  onChange={handleSearchChange} 
                />
                <Button variant="outline-secondary" >
                  <BsSearch />
                </Button>
              </InputGroup> 
            </Col>
            <Col className="mx-md-auto"></Col>
            <Col md="4" className="d-flex justify-content-md-end">
            <Dropdown 
              className="m-0 w-50"
              title={`Sort by Price (${sortOrder === 'asc' ? 'Ascending' : 'Descending'})`}
              onSelect={handleSortChange}>
              <Dropdown.Toggle 
              variant="none" 
              className="w-100 m-0 d-flex justify-content-between align-items-center px-2 border outline-secondary" id="dropdown-basic">
                Default
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="asc">Low Price</Dropdown.Item>
                <Dropdown.Item eventKey="desc">High Price</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Col>
          </Row>
          <Row>               
            { DisplayProd.map((product) => (
              <Col md="6" lg="4" key={product.id}>
                  <ProductCard product={product} /> 
              </Col>
            ))}
            <Pagination className="justify-content-center mt-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Pagination.Item
                          key={index}
                          active={index === changePage}
                          onClick={handlePaginationClick}
                    >
                          {index + 1 }
                    </Pagination.Item>
              ))}
            </Pagination>
          </Row>
        </Container>
    </section>
    
  );
}
export default Foods;