import React from 'react';
import PropTypes from "prop-types";

import {formatDistanceToNow} from "date-fns/esm";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) =>
   <>
       {formatDistanceToNow(date, {
           addSuffix: true,
           locale:    ruLocale
       })}
   </>

// Time.propTypes = {
//     date: PropTypes.string
// }

export default Time;
