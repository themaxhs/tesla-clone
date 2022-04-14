import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Ordena para una entrega sin contacto"
        backgroundImage="model-s.jpg"
        leftBtnText="Orden Personalizada"
        rightBtnText="Inventario de autos nuevos"
      />
      <Section
        title="Model 3"
        description="Ordena para una entrega sin contacto"
        backgroundImage="model-3.jpg"
        leftBtnText="Orden Personalizada"
        rightBtnText="Inventario de autos nuevos"
      />
      <Section
        title="Model X"
        description="Ordena para una entrega sin contacto"
        backgroundImage="model-x.jpg"
        leftBtnText="Orden Personalizada"
        rightBtnText="Inventario de autos nuevos"
      />
      <Section
        title="Model Y"
        description="Ordena para una entrega sin contacto"
        backgroundImage="model-y.jpg"
        leftBtnText="Orden Personalizada"
        rightBtnText="Inventario de autos nuevos"
      />
      <Section
        title="Cybertruck"
        description="Ordena para una entrega sin contacto"
        backgroundImage="cybertruck.jpg"
        leftBtnText="Orden Personalizada"
        rightBtnText="Inventario de autos nuevos"
      />
      <Section
        title="Energía solar y Powerwall"
        description="Totalmente eléctrico"
        backgroundImage="solar-panel.jpg"
        leftBtnText="Ordenar ahora"
        rightBtnText="Más Información"
      />
      <Section
        title="Energía solar para techos nuevos"
        description="Totalmente eléctrico"
        backgroundImage="solar-roof.jpg"
        leftBtnText="Ordenar ahora"
        rightBtnText="Más Información"
      />
      <Section
        title="Accesorios"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnText="Comprar ahora"
        rightBtnText=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
