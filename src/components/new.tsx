import React from 'react'

export default function NewComponent(props:any) {
    return (
        <>
        <style>{`
        .boooerr{
            padding: 1em 0;
            float: left;
            width: 50%;
            color: white;
          }
          @media screen and (max-width: 640px){
            .boooerr{
              display: block;
              width: 100%;
            }
          }
          
          @media screen and (min-width: 900px){
            .boooerr{
              width: 33.33333%;
            }
          }
          
          .dump {
            position: relative;
            width: 90%;
            max-width: 400px;
            margin: auto;
            overflow: hidden;
          }
          
          .dump .dump-overlay {
            background: rgba(0,0,0,0.7);
            position: absolute;
            height: 99%;
            width: 100%;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            opacity: 0;
            -webkit-transition: all 0.4s ease-in-out 0s;
            -moz-transition: all 0.4s ease-in-out 0s;
            transition: all 0.4s ease-in-out 0s;
          }
          
          .dump:hover .dump-overlay{
            opacity: 1;
          }
          
          .dump-image{
            width: 100%;
          }
          
          .dump-details {
            position: absolute;
            text-align: center;
            padding-left: 1em;
            padding-right: 1em;
            width: 100%;
            top: 50%;
            left: 50%;
            opacity: 0;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            -webkit-transition: all 0.3s ease-in-out 0s;
            -moz-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
          }
          
          .dump:hover .dump-details{
            top: 50%;
            left: 50%;
            opacity: 1;
          }
          
          .dump-details p{
            color: #fff;
            font-size: 0.8em;
          }
          
          .fadeIn-bottom{
            top: 80%;
          }
          
          .fadeIn-top{
            top: 20%;
          }
          
          .fadeIn-left{
            left: 20%;
          }
          
          .fadeIn-right{
            left: 80%;
          }
        `}</style>
            <div className="boooerr">
                <div className="dump">
                    <div className="dump-overlay"></div>
                    <img className="dump-image" src={props.img} alt={props.title} loading="lazy" />
                    <div className="dump-details fadeIn-bottom">
                        <h3 className="dump-title">{props.title}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
