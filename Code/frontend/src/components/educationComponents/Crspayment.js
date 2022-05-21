import React from "react";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import Axios from "axios";

function Crspayment(){

    return(
<div>

<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
            <div class="card card0">
                <div class="row">
                    <div class="col-md-6 d-block p-0 box">
                        <div class="card rounded-0 border-0 card1 pr-xl-4 pr-lg-3">
                            <div class="row justify-content-center">
                                <div class="col-11">
                                    <h3 class="text-center mt-4 mb-4" id="heading0">Gift card details</h3>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-5 fit-image">
                                    <img src="https://i.imgur.com/NnVWuER.png" height="200px" width="200px"/>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-11">
                                    <h1 class="text-center mt-4 mb-0" id="sub-heading1">6 months</h1>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-11">
                                    <p class="text-center mt-0 mb-3" id="sub-heading2">of unlimited access and infinite joy</p>
                                </div>
                            </div>
                            <form class="form-card p-4 pl-5">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-12">
                                                <label class="gift">To</label>
                                            </div>
                                            <div class="col-12">
                                                <input class="gift-input" type="text" name="to" placeholder="Mark"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-12">
                                                <label class="gift">From</label>
                                            </div>
                                            <div class="col-12">
                                                <input class="gift-input" type="text" name="from" placeholder="Julia"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <label class="gift">Recipient email</label><br/>
                                        <input class="gift-input" type="email" name="email" placeholder="mark@mail.org"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <label class="gift">Message email</label><br/>
                                        <input class="gift-input" type="text" name="msg" placeholder="Happy Birthday dear friend !"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 p-0 box">
                        <div class="card rounded-0 border-0 card2">
                            <div class="form-card">
                                <h2 id="heading" class="text-center">Payment Information</h2>

                                <div class="radio-group">
                                    <div class='radio selected' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px"/></div>
                                    <div class='radio' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" width="200px" height="60px"/></div> <br/>
                                </div>

                                <h3 id="credit" class="mb-3">Credit card</h3>
                                <input type="text" name="holdername" placeholder="John Smith"/>
                                <div class="row">
                                    <div class="col-12">
                                        <input type="text" name="cardno" id="cr_no" placeholder="0000 0000 0000 0000" minlength="19" maxlength="19"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-9 col-md-7">
                                        <input type="text" name="exp" id="exp" placeholder="MM/YY" minlength="5" maxlength="5"/>
                                    </div>
                                    <div class="col-3 col-md-5">
                                        <input type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" class="placeicon" minlength="3" maxlength="3"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-12">
                                        <div class="custom-control custom-checkbox custom-control-inline">
                                            <input id="chk1" type="checkbox" name="chk" class="custom-control-input"/>
                                            <label for="chk1" class="custom-control-label">Business account</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="bottom">
                                    <div class="row justify-content-center">
                                        <div class="col-12">
                                            <h4 id="total" class="text-center">Total: $69.94 + <span class="text-dark">VAT</span></h4>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-8">
                                            <input type="submit" value="PURCHASE CARD" class="btn btn-success"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</div>


    );
}

export default Crspayment;