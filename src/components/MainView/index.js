import React, { useState, useEffect } from 'react';
import MainViewOrders from '../MainView/MainViewOrders';
import { getAllOrdersDB } from '../../clientAPI/clientAPI';
import Nav from './Nav/index';
import ErrorCard from '../ErrorAndInfoCard/ErrorCard';
import { ContentLoader } from '../ContentLoader';
import { Container, MainContent, Form, InputField, Label } from './Style';

const MainView = ({ history, match }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allOrders, setAllOrders] = useState([]);
  const [search, setSearch] = useState('');
  const [now, setNow] = useState(new Date());
  let { orderstatus } = match.params;

  //IMPORTANT: START DEMO CODE
  //Original production code takes store name from logged-in user.
  //Functionality removed from DEMO
  const storeName = 'test_store_4';
  let user = true;
  //END DEMO CODE

  // default to new orders view after login
  if (orderstatus === undefined) {
    history.push('/new');
  }

  useEffect(
    () => {
      let timeInter;
      let getOrdersInterval;

      if (user) {
        setLoading(true);
        getAllOrders();
        getOrdersInterval = setInterval(getAllOrders.bind(this), 1000 * 300);
        timeInter = setInterval(updateTime.bind(this), 1000 * 60);
      }

      return () => {
        setLoading(null);
        clearInterval(getOrdersInterval);
        clearInterval(timeInter);
        setAllOrders([]);
      };
    },
    // eslint-disable-next-line
    [storeName]
  );

  const updateTime = () => {
    setNow(new Date());
  };

  const getAllOrders = async () => {
    try {
      const orders = await getAllOrdersDB(storeName);
      console.log(orders);
      setAllOrders(orders);
      setLoading(false);
    } catch (error) {
      console.log(`Error: ${error}`);
      setError(true);
    }
  };

  const handleChange = (orderstatus) => {
    history.push(`/${orderstatus}`);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value.substr(0, 20));
  };

  const handleCardClick = (ordernumber) => {
    history.push(`/${orderstatus}/${ordernumber}`);
  };

  if (error === true) {
    return <ErrorCard history={history} />;
  }

  if (loading) {
    return <ContentLoader />;
  }

  return (
    <Container finishedOrders={orderstatus === 'rejected'}>
      <Nav
        handleChange={handleChange}
        allOrders={allOrders}
        match={match}
        getAllOrders={getAllOrders}
      />
      <MainContent>
        {allOrders.length || allOrders ? (
          <>
            <Form>
              {orderstatus === 'in-process' && (
                <Label>
                  <InputField
                    type="text"
                    value={search}
                    onChange={updateSearch}
                    placeholder="Søk på navn og telefonnummer"
                  />
                </Label>
              )}
            </Form>
            <MainViewOrders
              now={now}
              orderstatus={orderstatus}
              allOrders={allOrders}
              handleCardClick={handleCardClick}
              search={search}
            />
          </>
        ) : (
          <ContentLoader />
        )}
      </MainContent>
    </Container>
  );
};

export default MainView;
