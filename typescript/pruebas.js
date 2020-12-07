var auto;
(function (auto) {
    auto[auto["mazda"] = 0] = "mazda";
    auto[auto["chevrolet"] = 1] = "chevrolet";
    auto[auto["subaru"] = 2] = "subaru";
})(auto || (auto = {}));
for (var i = 0; i < 3; i++) {
    var val = auto[i];
    console.log(val);
}
