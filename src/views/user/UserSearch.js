import React from "react";

function UserSearch() {
    return (
        <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="header-navbar-shadow"></div>
            <div className="content-wrapper">
                <div className="content-header row">
                    <div className="content-header-left col-md-9 col-12 mb-2">
                        <div className="row breadcrumbs-top">
                            <div className="col-12">
                                <h2 className="content-header-title float-left mb-0">Bootstrap Tables</h2>
                                <div className="breadcrumb-wrapper col-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Table
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
                        <div className="form-group breadcrum-right">
                            <div className="dropdown">
                                <button className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                                        type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="feather icon-settings"></i></button>
                                <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item"
                                                                                      href="#">Chat</a><a
                                    className="dropdown-item" href="#">Email</a><a className="dropdown-item"
                                                                                   href="#">Calendar</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">

                    <div className="row" id="basic-table">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Basic Tables</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p className="card-text">Using the most basic table Leanne Grahamup, here’s
                                            how <code>.table</code>-based tables look in Bootstrap. You can use any
                                            example of below table for your table and it can be use with any type of
                                            bootstrap tables.</p>
                                        <p><span className="text-bold-600">Example 1:</span> Table with outer spacing
                                        </p>

                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>User ID</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Leanne Graham</td>
                                                    <td>sincere@april.biz</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Ervin Howell</td>
                                                    <td>shanna@melissa.tv</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Clementine Bauch</td>
                                                    <td>nathan@yesenia.net</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <p className="px-2"><span className="text-bold-600">Example 2:</span> Minimal Table
                                        with no outer spacing.</p>


                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>User ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Ervin Howell</td>
                                                <td>shanna@melissa.tv</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Clementine Bauch</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row" id="table-inverse">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Inverse table</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p>You can also invert the colors—with light text on dark backgrounds—with <code
                                            className="highlighter-rouge">.table-inverse</code>.</p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-inverse">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>User ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Ervin Howell</td>
                                                <td>shanna@melissa.tv</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Clementine Bauch</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                    <p className="p-2">You can also invert the colors—with light text on dark
                                        backgrounds—with <code className="highlighter-rouge">.table-dark</code>.</p>
                                    <div className="table-responsive">
                                        <table className="table table-dark mb-0">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>User ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Ervin Howell</td>
                                                <td>shanna@melissa.tv</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Clementine Bauch</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="row" id="table-head">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Table head options</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p>Similar to tables and dark tables, use the modifier classes <code
                                            className="highlighter-rouge">.thead-light</code> or <code
                                            className="highlighter-rouge">.thead-dark</code> to make <code
                                            className="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark
                                            gray.</p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">User ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Ervin Howell</td>
                                                <td>shanna@melissa.tv</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Clementine Bauch</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row" id="table-hover-animation">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Table Hover Animation</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p>Add <code>.table-hover-animation</code> to enable a hover stat with animation
                                            on table rows within a <code
                                                className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                                        <div className="table-responsive">
                                            <table className="table table-hover-animation mb-0">
                                                <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">User ID</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Leanne Graham</td>
                                                    <td>sincere@april.biz</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Ervin Howell</td>
                                                    <td>shanna@melissa.tv</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Clementine Bauch</td>
                                                    <td>nathan@yesenia.net</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row" id="table-striped">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Striped rows</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p className="card-text">Use <code
                                            className="highlighter-rouge">.table-striped</code> to add zebra-striping to
                                            any table row within the <code
                                                className="highlighter-rouge">&lt;tbody&gt;</code>. This styling doesn't
                                            work in IE8 and below as <code>:nth-child</code> CSS selector isn't
                                            supported.</p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped mb-0">
                                            <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">User ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Ervin Howell</td>
                                                <td>shanna@melissa.tv</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Clementine Bauch</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row" id="table-striped-dark">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Striped rows with inverse dark</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p className="card-text">Use <code>.table-dark</code> with <code>.table-striped</code> to
                                            add zebra-striping to any inverse table row within
                                            the <code>&lt;tbody&gt;</code>. This styling doesn't work in IE8 and below
                                            as <code>:nth-child</code> CSS selector isn't supported.</p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped table-dark mb-0">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>User ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Ervin Howell</td>
                                                <td>shanna@melissa.tv</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Clementine Bauch</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row" id="table-bordered">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Bordered table</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p className="card-text">Add <code>.table-bordered</code> for borders on all
                                            sides of the table and cells. For Inverse Dark Table,
                                            add <code>.table-dark</code> along with <code>.table-bordered</code>.</p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-bordered mb-0">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>User ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@TwBootstrap</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Ervin Howell</td>
                                                <td>shanna@melissa.tv</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Clementine Bauch</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row" id="table-borderless">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Borderless Table</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p className="card-text">Add <code>.table-borderless</code> for a table without
                                            borders. It can also be used on dark tables.</p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-borderless mb-0">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>User ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@TwBootstrap</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Ervin Howell</td>
                                                <td>shanna@melissa.tv</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Clementine Bauch</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row" id="table-hover-row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Hoverable rows</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p>Add <code className="highlighter-rouge">.table-hover</code> to enable a hover
                                            state on table rows within a <code
                                                className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-hover mb-0">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>User ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Ervin Howell</td>
                                                <td>shanna@melissa.tv</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Clementine Bauch</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row" id="table-contexual">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Contextual classes</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p>Use contextual classes to color table rows or individual cells. Read full
                                            documnetation <a
                                                href="https://getbootstrap.com/docs/4.3/content/tables/IDcontextual-classes"
                                                target="_blank">here.</a></p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>User ID</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="table-active">
                                                <th scope="row">1</th>
                                                <td>Leanne Graham</td>
                                                <td>sincere@april.biz</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Ervin Howell</td>
                                                <td>shanna@melissa.tv</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr className="table-primary">
                                                <th scope="row">3</th>
                                                <td>Clementine Bauch</td>
                                                <td>Graham</td>
                                                <td>@twitter</td>
                                            </tr>
                                            <tr className="table-success">
                                                <th scope="row">4</th>
                                                <td>Ervin</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@gmail</td>
                                            </tr>
                                            <tr className="table-warning">
                                                <th scope="row">5</th>
                                                <td>Clementine Bauch</td>
                                                <td>nathan@yesenia.net</td>
                                                <td>@messanger</td>
                                            </tr>
                                            <tr className="table-danger">
                                                <th scope="row">6</th>
                                                <td>Patricia Lebsack</td>
                                                <td>julianne.OConner@kory.org</td>
                                                <td>@twitter</td>
                                            </tr>
                                            <tr className="table-info">
                                                <th scope="row">7</th>
                                                <td>Chelsey Dietrich</td>
                                                <td>lucio_Hettinger@annie.ca</td>
                                                <td>@messanger</td>
                                            </tr>
                                            <tr className="table-light">
                                                <th scope="row">8</th>
                                                <td>Kurtis Weissnat</td>
                                                <td>telly.Hoeger@billy.biz</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr className="table-dark">
                                                <th scope="row">9</th>
                                                <td>Glenna Reichert</td>
                                                <td>chaim_McDermott@dana.io</td>
                                                <td>@mdo</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row" id="table-responsive">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Responsive tables</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <p>Responsive tables allow tables to be scrolled horizontally with ease. Make
                                            any table responsive across all viewports by adding <code
                                                className="highlighter-rouge">.table-responsive</code> class on <code
                                                className="highlighter-rouge">.table</code>. Or, pick a maximum
                                            breakpoint with which to have a responsive table up to by adding <code
                                                className="highlighter-rouge"> .table-responsive</code>.
                                            Read full documnetation <a
                                                href="https://getbootstrap.com/docs/4.3/content/tables/#responsive-tables"
                                                target="_blank">here.</a></p>
                                        <div className="alert alert-info mt-1 p-1">
                                            <h4 className="warning">Vertical clipping/truncation</h4>
                                            <p>Responsive tables make use of <code className="highlighter-rouge">overflow-y:
                                                hidden</code>, which clips off any content that goes beyond the bottom
                                                or top edges of the table. In particular, this can clip off dropdown
                                                menus and other third-party widgets.</p>
                                        </div>
                                        <h5 className="card-title mt-2">Always responsive</h5>
                                    </div>
                                    <table className="table table-responsive mb-0">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Heading 1</th>
                                            <th scope="col">Heading 2</th>
                                            <th scope="col">Heading 3</th>
                                            <th scope="col">Heading 4</th>
                                            <th scope="col">Heading 5</th>
                                            <th scope="col">Heading 6</th>
                                            <th scope="col">Heading 7</th>
                                            <th scope="col">Heading 8</th>
                                            <th scope="col">Heading 9</th>
                                            <th scope="col">Heading 10</th>
                                            <th scope="col">Heading 11</th>
                                            <th scope="col">Heading 12</th>
                                            <th scope="col">Heading 13</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default UserSearch;
