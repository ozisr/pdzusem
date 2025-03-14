import React from 'react';

const Novicnik= () => {
  return (
    <div className="footer-card">
      <h3 className="head-description pb-0">Novičnik</h3>
      <p>Prijavi se na naš novičnik!</p>
      <form className="flex flex-col gap-2">
        <input type="text" placeholder="Vaš e-mail" className="border-2 border-gray-300 rounded-md p-2" ></input>
          <button type="submit" className="bg-primary text-white rounded-md p-2">Prijavi me!</button>
      </form>
    </div>
  );
};

export default Novicnik;