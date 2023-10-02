class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header>

    <div id="top-header">
        <div class="container">
            <ul class="header-links pull-left">
                <li><a href="#"><i class="fa fa-phone"></i> +51 000000000</a></li>
                <li><a href="#"><i class="fa fa-envelope-o"></i> correo@dominio.com</a></li>
                <li><a href="#"><i class="fa fa-map-marker"></i> Direccion de Perú</a></li>
            </ul>
            <ul class="header-links pull-right">
                <li id="mySesion"><a href="#"><i class="fa fa-user-o"></i> Ingresar / Registrate</a></li>
            </ul>
        </div>
    </div>

    <div id="header">

        <div class="container">

            <div class="row">

                <div class="col-md-3">
                    <div class="header-logo">
                        <a href="#" class="logo">
                            <img src="../assets/images/LogoFelix.png" alt="">
                            <span>Ferri Work</span>
                        </a>
                    </div>
                </div>


                <div class="col-md-6">
                    <div class="header-search">
                        <form>
                            <select class="input-select">
                                <option value="0" selected="selected">Todo</option>
                                <option value="1">Categoria 1</option>
                                <option value="1">Categoria 2</option>
                            </select>
                            <input class="input" placeholder="Busca tu Producto">
                            <button class="search-btn">Buscar</button>
                        </form>
                    </div>
                </div>


                <div class="col-md-3 clearfix">
                    <div class="header-ctn">

                        <div>
                            <a href="#">
                                <i class="fa fa-heart-o"></i>
                                <span>Deseados</span>
                                <div class="qty">2</div>
                            </a>
                        </div>


                        <div class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i class="fa fa-shopping-cart"></i>
                                <span>Mi carrito</span>
                                <div class="qty">2</div>
                            </a>
                            <div class="cart-dropdown">
                                <div class="cart-list">
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="../assets/images/default.jpg" alt="">
                                        </div>
                                        <div class="product-body">
                                            <h3 class="product-name"><a href="#">Objecto 1</a></h3>
                                            <h4 class="product-price"><span class="qty">1x</span>S/. 100</h4>
                                        </div>
                                        <button class="delete"><i class="fa fa-close"></i></button>
                                    </div>
                                    <div class="product-widget">
                                        <div class="product-img">
                                            <img src="../assets/images/default.jpg" alt="">
                                        </div>
                                        <div class="product-body">
                                            <h3 class="product-name"><a href="#">Objecto 2</a></h3>
                                            <h4 class="product-price"><span class="qty">1x</span>S/. 100</h4>
                                        </div>
                                        <button class="delete"><i class="fa fa-close"></i></button>
                                    </div>
                                </div>
                                <div class="cart-summary">
                                    <small>2 Objectos Seleccionados</small>
                                    <h5>SUBTOTAL: S/. 200</h5>
                                </div>
                                <div class="cart-btns">
                                    <a href="#">Más Detalles</a>
                                    <a href="#">Comprar <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-toggle">
                            <a href="#">
                                <i class="fa fa-bars"></i>
                                <span>Menu</span>
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>

</header>
    `;
  }
}


customElements.define('header-component', Header);