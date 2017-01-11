/**
 * Created by elton on 04/01/17.
 */

import React from 'react';
import {Link} from 'react-router'

export default class Layout extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div class="container">
                        <div class="navbar-header page-scroll">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <Link to="/">
                                <span class="navbar-brand page-scroll">REACT.js studies app</span>
                            </Link>
                        </div>

                        <div class="collapse navbar-collapse navbar-ex1-collapse">
                            <ul class="nav navbar-nav">
                                <li>
                                    <Link to="/">About</Link>
                                </li>
                                <li>
                                    <Link to="/todos">Todos</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <section id="content" class="content-section">
                    {this.props.children}
                </section>
            </div>
        )
    }
}