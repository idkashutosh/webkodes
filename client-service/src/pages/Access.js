import React, { useContext,useEffect } from 'react';
import {LoadingContext} from '../store/Store';

function Access() {
    const [,setLoading] = useContext(LoadingContext);
    useEffect(() => {
        setLoading(false)
      });

    
  return (
    <div className="page-content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">         
                            <div>
                                <p>Access</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
    
}

export default Access
