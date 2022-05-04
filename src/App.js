// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
//redux 
// ----------------------------------------------------------------------
import { fetchProducts } from "./redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchBrands } from './redux/slices/brandsSlice';
  
import { deleteEvent, deleteEventfunction, fetchEvents } from './redux/slices/eventSlice';
 
//------------------------

export default function App() {
  const [deletedEvent,errors] = useSelector(deleteEventfunction);

  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(fetchProducts())
  dispatch(fetchBrands())

  },[deletedEvent])
  dispatch(fetchComments())
  dispatch(fetchRatings())


  dispatch(fetchCategories())
  

  },[])

  
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}
