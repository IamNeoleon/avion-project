import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectFilter, setDesigners, setPrice } from "../../redux/slices/filterSlice";

export const ResetFilters = () => {
   const { designers, price } = useAppSelector(selectFilter)
   const isActiveFilters = designers.length > 0 || price[0] > 0 || price[1] > 0;
   const dispatch = useAppDispatch();

   const reset = () => {
      dispatch(setDesigners([]))
      dispatch(setPrice([0, 0]))
   }

   return (
      <>
         {
            isActiveFilters && (
               <button onClick={reset} className="product__reset-filters">
                  <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="rotateIconTitle" stroke="#FF0000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000000">
                     <path d="M22 12l-3 3-3-3" /> <path d="M2 12l3-3 3 3" />
                     <path d="M19.016 14v-1.95A7.05 7.05 0 0 0 8 6.22" />
                     <path d="M16.016 17.845A7.05 7.05 0 0 1 5 12.015V10" />
                     <path stroke-linecap="round" d="M5 10V9" />
                     <path stroke-linecap="round" d="M19 15v-1" />
                  </svg>
                  <span>Reset All</span>
               </button>
            )
         }
      </>
   );
};
