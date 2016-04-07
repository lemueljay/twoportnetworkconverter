/**
 * Created by Lemmeister on 4/5/2016.
 */


    /*
    * Function for getting the determinant of a 2x2 matrix.
    * */

    function getDeterminant(matReal,matImag) {
        var a = multComplex(matReal[0], matImag[0], matReal[3], matImag[3]);
        var b = multComplex(matReal[1], matImag[1], matReal[2], matImag[2]);
        if(((a[0] - b[0])) == 0 && ((a[1] - b[1])) == 0) {
            alert('ERROR! DETERMINANT IS ZERO!');
        } else {
            console.log("Determinant: " + (a[0] - b[0]) + " " + (a[1] - b[1]) + "j");
            return [(a[0] - b[0]), (a[1] - b[1])];
        }

    }

    /*
    * Function for multiplying two complex numbers.
    * */

    function multComplex(real1, imag1, real2, imag2) {
        var real = (real1 * real2) - (imag1 * imag2);
        var imag = (real1 * imag2) + (imag1 * real2);
        return [real, imag];

    }

    /*
    * Functions for transforming from z to any transforms.
    * */

    function zToz(matReal, matImag) {
        var a = [[matReal[0], matImag[0]], [1, 0]];
        var b = [[matReal[1], matImag[1]], [1, 0]];
        var c = [[matReal[2], matImag[2]], [1, 0]];
        var d = [[matReal[3], matImag[3]], [1, 0]];
        return [a, b, c, d];
    }

    function zToy(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[3], matImag[3]], det];
        var b = [[matReal[1] * -1, matImag[1] * -1], det];
        var c = [[matReal[2] * -1, matImag[2] * -1], det];
        var d = [[matReal[0], matImag[0]], det];
        return [a, b, c, d];
    }

    function zToh(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [det, [matReal[3], matImag[3]]];
        var b = [[matReal[1], matImag[1]], [matReal[3], matImag[3]]];
        var c = [[matReal[2] * -1, matImag[2] * -1], [matReal[3], matImag[3]]];
        var d = [[1, 0], [matReal[3], matImag[3]]];
        return [a, b, c, d];
    }

    function zTog(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[1, 0], [matReal[0], matImag[0]]];
        var b = [[matReal[1] * -1, matImag[1] * -1], [matReal[0], matImag[0]]];
        var c = [[matReal[2], matImag[2]], [matReal[0], matImag[0]]];
        var d = [det, [matReal[0], matImag[0]]];
        return [a, b, c, d];
    }

    function zToT(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[0], matImag[0]], [matReal[2], matImag[2]]];
        var b = [det, [matReal[2], matImag[2]]];
        var c = [[1, 0], [matReal[2], matImag[2]]];
        var d = [[matReal[3], matImag[3]], [matReal[2], matImag[2]]];
        return [a, b, c, d];
    }

    function zTot(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[3], matImag[3]], [matReal[1], matImag[1]]];
        var b = [det, [matReal[1], matImag[1]]];
        var c = [[1, 0], [matReal[1], matImag[1]]];
        var d = [[matReal[0], matImag[0]], [matReal[1], matImag[1]]];
        return [a, b, c, d];
    }

    /*
     * Functions for transforming from y to any transforms.
     * */

    function yToz(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[3], matImag[3]], det];
        var b = [[matReal[1] * -1, matImag[1] * -1], det];
        var c = [[matReal[2] * -1, matImag[2] * -1], det];
        var d = [[matReal[0], matImag[0]], det];
        return [a, b, c, d];
    }

    function yToy(matReal, matImag) {
        var a = [[matReal[0], matImag[0]], [1, 0]];
        var b = [[matReal[1], matImag[1]], [1, 0]];
        var c = [[matReal[2], matImag[2]], [1, 0]];
        var d = [[matReal[3], matImag[3]], [1, 0]];
        return [a, b, c, d];
    }

    function yToh(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[1, 0], [matReal[0], matImag[0]]];
        var b = [[matReal[1] * -1, matImag[1] * -1], [matReal[0], matImag[0]]];
        var c = [[matReal[2], matImag[2]], [matReal[0], matImag[0]]];
        var d = [det, [matReal[0], matImag[0]]];
        return [a, b, c, d];
    }

    function yTog(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [det, [matReal[3], matImag[3]]];
        var b = [[matReal[1], matImag[1]], [matReal[3], matImag[3]]];
        var c = [[matReal[2] * -1, matImag[2] * -1], [matReal[3], matImag[3]]];
        var d = [[1, 0], [matReal[3], matImag[3]]];
        return [a, b, c, d];
    }

    function yToT(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[3] * -1, matImag[3] * -1], [matReal[2], matImag[2]]];
        var b = [[-1, 0], [matReal[2], matImag[2]]];
        var c = [[det[0] * -1, det[1] * -1], [matReal[2], matImag[2]]];
        var d = [[matReal[0] * -1, matImag[0] * -1], [matReal[2], matImag[2]]];
        return [a, b, c, d];
    }

    function yTot(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[0] * -1, matImag[0] * -1], [matReal[1], matImag[1]]];
        var b = [[-1, 0], [matReal[1], matImag[1]]];
        var c = [[det[0] * -1, det[1] * -1], [matReal[1], matImag[1]]];
        var d = [[matReal[3] * -1, matImag[3] * -1], [matReal[1], matImag[1]]];
        return [a, b, c, d];
    }

    /*
     * Functions for transforming from h to any transforms.
     * */

    function hToz(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [det, [matReal[3], matImag[3]]];
        var b = [[matReal[1], matImag[1]], [matReal[3], matImag[3]]];
        var c = [[matReal[2] * -1, matImag[2] * -1], [matReal[3], matImag[3]]];
        var d = [[1, 0], [matReal[3], matImag[3]]];
        return [a, b, c, d];
    }

    function hToy(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[1, 0], [matReal[0], matImag[0]]];
        var b = [[matReal[1] * -1, matImag[1] * -1], [matReal[0], matImag[0]]];
        var c = [[matReal[2], matImag[2]], [matReal[0], matImag[0]]];
        var d = [det, [matReal[0], matImag[0]]];
        return [a, b, c, d];
    }

    function hToh(matReal, matImag) {
        var a = [[matReal[0], matImag[0]], [1, 0]];
        var b = [[matReal[1], matImag[1]], [1, 0]];
        var c = [[matReal[2], matImag[2]], [1, 0]];
        var d = [[matReal[3], matImag[3]], [1, 0]];
        return [a, b, c, d];
    }

    function hTog(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[3], matImag[3]], det];
        var b = [[matReal[1] * -1, matImag[1] * -1], det];
        var c = [[matReal[2] * -1, matImag[2] * -1], det];
        var d = [[matReal[0], matImag[0]], det];
        return [a, b, c, d];
    }

    function hToT(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[det[0] * -1, det[1] * -1], [matReal[2], matImag[2]]];
        var b = [[matReal[0] * -1, matImag[0] * -1], [matReal[2], matImag[2]]];
        var c = [[matReal[3] * -1, matImag[3] * -1], [matReal[2], matImag[2]]];
        var d = [[-1, 0], [matReal[2], matImag[2]]];
        return [a, b, c, d];
    }

    function hTot(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[1, 0], [matReal[1], matImag[1]]];
        var b = [[matReal[0], matImag[0]], [matReal[1], matImag[1]]];
        var c = [[matReal[3], matImag[3]], [matReal[1], matImag[1]]];
        var d = [det, [matReal[1], matImag[1]]];
        return [a, b, c, d];
    }

    /*
     * Functions for transforming from g to any transforms.
     * */

    function gToz(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[1, 0], [matReal[0], matImag[0]]];
        var b = [[matReal[1] * -1, matImag[1] * -1], [matReal[0], matImag[0]]];
        var c = [[matReal[2], matImag[2]], [matReal[0], matImag[0]]];
        var d = [det, [matReal[0], matImag[0]]];
        return [a, b, c, d];
    }

    function gToy(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [det, [matReal[3], matImag[3]]];
        var b = [[matReal[1], matImag[1]], [matReal[3], matImag[3]]];
        var c = [[matReal[2] * -1, matImag[2] * -1], [matReal[3], matImag[3]]];
        var d = [[1, 0], [matReal[3], matImag[3]]];
        return [a, b, c, d];
    }

    function gToh(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[3], matImag[3]], det];
        var b = [[matReal[1] * -1, matImag[1] * -1], det];
        var c = [[matReal[2] * -1, matImag[2] * -1], det];
        var d = [[matReal[0], matImag[0]], det];
        return [a, b, c, d];
    }

    function gTog(matReal, matImag) {
        var a = [[matReal[0], matImag[0]], [1, 0]];
        var b = [[matReal[1], matImag[1]], [1, 0]];
        var c = [[matReal[2], matImag[2]], [1, 0]];
        var d = [[matReal[3], matImag[3]], [1, 0]];
        return [a, b, c, d];
    }

    function gToT(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[1, 0], [matReal[2], matImag[2]]];
        var b = [[matReal[3], matImag[3], matReal[2], matImag[2]]];
        var c = [[matReal[0], matImag[0]], [matReal[2], matImag[2]]];
        var d = [det, [matReal[2], matImag[2]]];
        return [a, b, c, d];
    }

    function gTot(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[det[0] * -1, det[1] * -1], [matReal[1], matImag[1]]];
        var b = [[matReal[3] * -1, matImag[3] * -1], [matReal[1], matImag[1]]];
        var c = [[matReal[0] * -1, matImag[0] * -1], [matReal[1], matImag[1]]];
        var d = [[-1, 0], [matReal[1], matImag[1]]];
        return [a, b, c, d];
    }

    /*
     * Functions for transforming from T to any transforms.
     * */

    function TToz(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[0], matImag[0]], [matReal[2], matImag[2]]];
        var b = [det, [matReal[2], matImag[2]]];
        var c = [[1, 0], [matReal[2], matImag[2]]];
        var d = [[matReal[3], matImag[3]], [matReal[2], matImag[2]]];
        return [a, b, c, d];
    }

    function TToy(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[3], matImag[3]], [matReal[1], matImag[1]]];
        var b = [[det[0] * -1, det[1] * -1], [matReal[1], matImag[1]]];
        var c = [[-1, 0], [matReal[1], matImag[1]]];
        var d = [[matReal[0], matImag[0]], [matReal[1], matImag[1]]];
        return [a, b, c, d];
    }

    function TToh(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[1], matImag[1]], [matReal[3], matImag[3]]];
        var b = [det, [matReal[3], matImag[3]]];
        var c = [[-1, 0], [matReal[3], matImag[3]]];
        var d = [[matReal[2], matImag[2]], [matReal[3], matImag[3]]];
        return [a, b, c, d];
    }

    function TTog(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[2], matImag[2]], [matReal[0], matImag[0]]];
        var b = [[det[0] * -1, det[1] * -1], [matReal[0], matImag[0]]];
        var c = [[1, 0], [matReal[0], matImag[0]]];
        var d = [[matReal[1], matImag[1]], [matReal[0], matImag[0]]];
        return [a, b, c, d];
    }

    function TToT(matReal, matImag) {
        var a = [[matReal[0], matImag[0]], [1, 0]];
        var b = [[matReal[1], matImag[1]], [1, 0]];
        var c = [[matReal[2], matImag[2]], [1, 0]];
        var d = [[matReal[3], matImag[3]], [1, 0]];
        return [a, b, c, d];
    }

    function TTot(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[3], matImag[3]], det];
        var b = [[matReal[1], matImag[1]], det];
        var c = [[matReal[2], matImag[2]], det];
        var d = [[matReal[0], matImag[0]], det];
        return [a, b, c, d];
    }

    /*
     * Functions for transforming from t to any transforms.
     * */

    function tToz(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[3], matImag[3]], [matReal[2], matImag[2]]];
        var b = [[1,0], [matReal[2], matImag[2]]];
        var c = [det, [matReal[2], matImag[2]]];
        var d = [[matReal[0], matImag[0]], [matReal[2], matImag[2]]];
        return [a, b, c, d];
    }

    function tToy(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[0], matImag[0]], [matReal[1], matImag[1]]];
        var b = [[-1, 0], [matReal[1], matImag[1]]];
        var c = [[det[0] * -1, det[1] * -1], [matReal[1], matImag[1]]];
        var d = [[matReal[3], matImag[3]], [matReal[1], matImag[1]]];
        return [a, b, c, d];
    }

    function tToh(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[1], matImag[1]], [matReal[0], matImag[0]]];
        var b = [[1, 0], [matReal[0], matImag[0]]];
        var c = [det, [matReal[0], matImag[0]]];
        var d = [[matReal[2], matImag[2]], [matReal[0], matImag[0]]];
        return [a, b, c, d];
    }

    function tTog(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[2], matImag[2]], [matReal[3], matImag[3]]];
        var b = [[-1, 0], [matReal[3], matImag[3]]];
        var c = [det, [matReal[3], matImag[3]]];
        var d = [[matReal[1] * -1, matImag[1] * -1], [matReal[3], matImag[3]]];
        return [a, b, c, d];
    }

    function tToT(matReal, matImag) {
        var det = getDeterminant(matReal, matImag);
        var a = [[matReal[3], matImag[3]], det];
        var b = [[matReal[1], matImag[1]], det];
        var c = [[matReal[2], matImag[2]], det];
        var d = [[matReal[0], matImag[0]], det];
        return [a, b, c, d];
    }

    function tTot(matReal, matImag) {
        var a = [[matReal[0], matImag[0]], [1, 0]];
        var b = [[matReal[1], matImag[1]], [1, 0]];
        var c = [[matReal[2], matImag[2]], [1, 0]];
        var d = [[matReal[3], matImag[3]], [1, 0]];
        return [a, b, c, d];
    }
