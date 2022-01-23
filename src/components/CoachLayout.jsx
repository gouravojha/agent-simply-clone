import React from 'react';
import "./styles/CoachLayout.css"
import { MdVerifiedUser } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
function CoachLayout() {
  return (
    <div className="coach__main">
      <div className="coach__left">
        <div className="coach__info">
          <div className="coach__bus_number">
            <span>Bus No : <b>N/A</b></span>
            <span className="coach__verified_icon"><MdVerifiedUser size={20} color="green" /> Verified</span>
          </div>
          <div className="coach__bus_number">
            <span>Contact No : <b>N/A</b></span>
          </div>
        </div>
        <div className="coach__default_text">
          <span>Please select a service to see the seat layout and pricing</span>
        </div>
      </div>
      <div className="coach__right">
        <div className="coach__search__bus">
          <div className="coach__search__bus__select">
            <div className="coach__select">
              <select id="coach__search__from">
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Mumbai</option>
              </select>
            </div>
            <div className="coach__search__exchange_icon">
              <FaExchangeAlt size="18" color="white" cursor="pointer" />
            </div>
            <div className="coach__select">
              <select id="coach__search__to">
                <option>Chennai</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
              </select>
            </div>
            <div>
              <input type="date" id="coach__search__date" />
            </div>
            <div class="btn-group">
              <button id="today">Today</button>
              <button id="tomorrow">Tomorrow</button>
            </div>
            <div>
              <button type="submit" id="coach__searchbus">Search Bus</button>
            </div>
          </div>
          <div className="coach__filter">
            <div>
              <input type="radio" id="age1" name="age" value="30" />
              <label for="age1">All Service</label>
            </div>
            <div>
              <input type="radio" id="age1" name="age" value="30" />
              <label for="age1">Direct Services</label>
            </div>
            <div>
              <input type="radio" id="age1" name="age" value="30" />
              <label for="age1">Prepaid Services</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachLayout;
