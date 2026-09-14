function cekNilai() {

    let nama = document.getElementById("nama").value;
    let nilai = Number(document.getElementById("nilai").value);

    let grade;
    let status;

    if (nilai >= 90) {
        grade = "A";
    } 
    else if (nilai >= 80) {
        grade = "B";
    } 
    else if (nilai >= 70) {
        grade = "C";
    } 
    else if (nilai >= 60) {
        grade = "D";
    } 
    else {
        grade = "E";
    }

    if (nilai >= 70) {
        status = "LULUS";
    } 
    else {
        status = "TIDAK LULUS";
    }

    document.getElementById("hasil").innerHTML =
        "Nama: " + nama + "<br>" +
        "Nilai: " + nilai + "<br>" +
        "Grade: " + grade + "<br>" +
        "Status: " + status;
}