<div class="container-fluid"> 
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse text-white bg-dark  padding-and-margin">
                <div class="position-sticky pt-3 sidebar-sticky">
                    <ul class="nav flex-column sidebar-ul mt-3">
                        <li class="nav-item">
                            <a class="nav-link active text-light sidebar-home" aria-current="page" href="index.php">
                                <span data-feather="home" class="align-text-bottom h1"></span>
                                <ion-icon class="me-1" name="home"></ion-icon> Home
                            </a>
                        </li>
                        <li class="mb-1">
                            <button
                                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-light"
                                data-bs-toggle="collapse"
                                data-bs-target="#dashboard-usuario"
                                aria-expanded="false">
                                Clientes
                            </button>
                            <div class="collapse" id="dashboard-usuario">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small text-light">
                                    <li>
                                        <a
                                            href="cadastro.php"
                                            class="link-dark d-inline-flex text-decoration-none rounded text-light">Cadastrar</a>
                                    </li>
                                    <li>
                                        <a
                                            href="listar.php"
                                            class="link-dark d-inline-flex text-decoration-none rounded text-light">Visualizar</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button
                                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-light"
                                data-bs-toggle="collapse"
                                data-bs-target="#dashboard-cliente"
                                aria-expanded="false">
                                Produtos
                            </button>
                            <div class="collapse" id="dashboard-cliente">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small text-light">
                                    <li>
                                        <a
                                            href="Produtos.php"
                                            class="link-dark d-inline-flex text-decoration-none rounded text-light">Cadastrar Produtos</a>
                                    </li>
                                    <li>
                                        <a
                                            href="listar-p.php"
                                            class="link-dark d-inline-flex text-decoration-none rounded text-light">Visualizar</a>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                        </li>
                        
                        <li class="mb-1">
                            <button
                                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-light"
                                data-bs-toggle="collapse"
                                data-bs-target="#dashboard-fornecedores"
                                aria-expanded="false">
                                Fornecedores
                            </button>
                            <div class="collapse" id="dashboard-fornecedores">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small text-light">
                                    <li>
                                        <a
                                            href="/eletro-store/template-eletro-store/Dashboard/cadastro-fornecedor.php"
                                            class="link-dark d-inline-flex text-decoration-none rounded text-light">Cadastrar Fornecedores</a>
                                    </li>
                                    <li>
                                        <a
                                            href="/eletro-store/template-eletro-store/Dashboard/listar-fornecedor.php"
                                            class="link-light d-inline-flex text-decoration-none rounded text-light">Visualizar</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button
                                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-light"
                                data-bs-toggle="collapse"
                                data-bs-target="#dashboard-relatorio"
                                aria-expanded="false">
                                Relatórios
                            </button>
                            <div class="collapse" id="dashboard-relatorio">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small text-light">
                                    <li>
                                        <a
                                            href="/eletro-store/template-eletro-store/Dashboard/relatorio.php"
                                            class="link-dark d-inline-flex text-decoration-none rounded text-light">Movimentações</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
    
            </div>
        </nav>
        </div>
    </div>