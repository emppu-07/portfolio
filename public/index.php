<?php
session_start();
set_include_path(dirname(__FILE__) . '/../');

$route = explode("?", $_SERVER["REQUEST_URI"])[0];
$method = strtolower($_SERVER["REQUEST_METHOD"]);



switch($route) {
    case "/":
        require_once "pages/home.php";
    break;

    case "/about":
        require_once "pages/about.php";
    break;

    case "/stuff":
        require_once "pages/stuff.php";
    break;

    case "/contact":
        require_once "pages/contact.php";
    break;

    default:
      echo "404";
  }
